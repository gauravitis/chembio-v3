import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs';
import { db } from '@/db';
import { products } from '@/db/schema/products';

export async function POST(request: Request) {
  try {
    const { userId } = auth();

    // Check if user is authenticated
    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const body = await request.json();
    const { name, category, description, price, unit, sku, stockQuantity, imageUrl } = body;

    // Validate required fields with specific messages
    const missingFields = [];
    if (!name) missingFields.push('name');
    if (!category) missingFields.push('category');
    if (!description) missingFields.push('description');
    if (!price) missingFields.push('price');
    if (!unit) missingFields.push('unit');
    if (!sku) missingFields.push('sku');
    if (!stockQuantity) missingFields.push('stockQuantity');

    if (missingFields.length > 0) {
      return new NextResponse(
        `Missing required fields: ${missingFields.join(', ')}`,
        { status: 400 }
      );
    }

    // Validate numeric fields
    if (isNaN(parseFloat(price))) {
      return new NextResponse('Price must be a valid number', { status: 400 });
    }
    if (isNaN(parseFloat(stockQuantity))) {
      return new NextResponse('Stock quantity must be a valid number', { status: 400 });
    }

    console.log('Creating product with data:', {
      name,
      category,
      description,
      price: parseFloat(price),
      unit,
      sku,
      stockQuantity: parseFloat(stockQuantity),
      imageUrl: imageUrl || null,
    });

    // Create new product
    const newProduct = await db.insert(products).values({
      name,
      category,
      description,
      price: parseFloat(price),
      unit,
      sku,
      stockQuantity: parseFloat(stockQuantity),
      imageUrl: imageUrl || null,
    }).returning();

    console.log('Product created successfully:', newProduct[0]);
    return NextResponse.json(newProduct[0]);
  } catch (error) {
    console.error('[PRODUCTS_POST] Detailed error:', error);
    if (error instanceof Error) {
      return new NextResponse(error.message, { status: 500 });
    }
    return new NextResponse('Internal server error', { status: 500 });
  }
}

export async function GET() {
  try {
    const allProducts = await db.select().from(products);
    return NextResponse.json(allProducts);
  } catch (error) {
    console.error('[PRODUCTS_GET]', error);
    if (error instanceof Error) {
      return new NextResponse(error.message, { status: 500 });
    }
    return new NextResponse('Internal server error', { status: 500 });
  }
}
