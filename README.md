# Chembio Lifesciences

## Project Overview

Chembio Lifesciences is a modern web application built with Next.js and React. It features a well-organized structure with separate directories for pages, components, data, and utilities. The tech stack includes Tailwind CSS for styling, Clerk for authentication, and Drizzle ORM with Neon PostgreSQL for database management. The application provides various pages like Home, About, Products, Team, and Contact, each with specific functionalities and components. The project also includes API routes for managing products and utility scripts for data conversion.

## Project Structure

The project is organized into several directories and files, each serving a specific purpose:

- **Root Directory:**
  - `.env.example`: Example environment variables file.
  - `.gitignore`: Specifies files and directories to be ignored by Git.
  - `next.config.js`: Configuration file for Next.js.
  - `package.json`: Contains project metadata and dependencies.
  - `postcss.config.js`: Configuration for PostCSS.
  - `products.csv`: CSV file containing product data.
  - `README.md`: Project documentation.
  - `tailwind.config.ts`: Configuration for Tailwind CSS.
  - `tsconfig.json`: TypeScript configuration file.

- **instructions/**: Contains project documentation and requirements.
  - `instructions/PRD.md`: Product Requirements Document.

- **public/**: Contains static assets like icons and images.
  - `icons/`
  - `partners/`
    - `README.md`

- **scripts/**: Contains utility scripts.
  - `scripts/convert-csv.js`: Script to convert CSV data to a specific format.

- **src/**: Main source code directory.
  - `app/`: Contains Next.js pages and API routes.
    - `about/`
      - `src/app/about/page.tsx`: About page.
    - `api/`
      - `products/`
        - `src/app/api/products/route.ts`: API route for products.
    - `contact/`
      - `src/app/contact/page.tsx`: Contact page.
    - `globals.css`: Global CSS styles.
    - `layout.tsx`: Layout component.
    - `page.tsx`: Home page.
    - `privacy/`
      - `src/app/privacy/page.tsx`: Privacy policy page.
    - `products/`
      - `src/app/products/page.tsx`: Products page.
    - `team/`
      - `src/app/team/page.tsx`: Team page.
    - `terms/`
      - `src/app/terms/page.tsx`: Terms of service page.
  - `components/`: Reusable UI components.
    - `ui/`
      - `department-card.tsx`
      - `footer.tsx`
      - `interactive-molecule.tsx`
      - `quick-view.tsx`
  - `data/`: Contains data files.
    - `products.ts`: Product data.
  - `lib/`: Utility functions and configurations.
    - `utils.ts`: Utility functions.

## Tech Stack

- **Frontend:**
  - **Framework**: Next.js 14 with React 18
  - **UI Components**: Shadcn UI library
  - **Styling**: Tailwind CSS

- **Backend:**
  - **API Routes**: Next.js API routes
  - **ORM**: Drizzle
  - **Database**: Neon PostgreSQL

- **Authentication**: Clerk
- **Form Validation**: Zod
- **Animation**: Framer Motion
- **CSV Parsing**: `csv-parse`
- **Utility Libraries**: `clsx`, `tailwind-merge`

## Key Features

1. **Home Page**:
   - Engaging landing page with company highlights.
   - Showcase key products and links to other sections of the website.

2. **About Page**:
   - Description of the organization, its vision, and achievements.
   - Portfolio showcasing major accomplishments or partnerships.

3. **Team Page**:
   - Details of the management and team structure.
   - Contact details of key team members.

4. **Products Page**:
   - Display products categorized by brand.
   - Product cards with name, description, catalogue ID, CAS number, image, and weight/volume options.
   - Buttons for viewing full specifications and requesting quotations.

5. **Contact Page**:
   - Address, phone numbers, email, and contact form for inquiries.

6. **Admin Dashboard**:
   - Admin login and authentication via Clerk.
   - CRUD operations for product management (add, edit, delete products).
   - Manage product categories and weights/volumes.

7. **API Routes**:
   - Fetch list of products.
   - Add, update, and delete products (admin only).
   - Submit quotation requests.

8. **Authentication**:
   - User authentication and role-based access control using Clerk.

9. **Form Validation**:
   - Form and data validation using Zod.

10. **Responsive Design**:
    - Modern and responsive design using Tailwind CSS.

11. **Server-Side Rendering**:
    - Server-side rendering with Next.js for improved performance and SEO.

12. **Interactive UI Components**:
    - Reusable UI components like `ProductCard`, `DepartmentCard`, `TeamModal`, and `InteractiveMolecule`.

13. **Global Styles**:
    - Global CSS styles and custom utilities using Tailwind CSS.

14. **Utility Functions**:
    - Utility functions for common tasks, such as merging class names (`cn` function in `utils.ts`).

15. **Data Management**:
    - Product data management using CSV parsing and Drizzle ORM with Neon PostgreSQL.

16. **Animations**:
    - Smooth animations and transitions using Framer Motion.

17. **Documentation**:
    - Comprehensive documentation for project setup, development guidelines, and API endpoints.

## Getting Started

1. Install dependencies:
    ```sh
    npm install
    ```
2. Start the application:
    ```sh
    npm start
    ```
3. Open your browser and navigate to `http://localhost:3000`.

## Contributing

1. Fork the repository.
2. Create a new branch:
    ```sh
    git checkout -b feature-branch
    ```
3. Make your changes and commit them:
    ```sh
    git commit -m 'Add some feature'
    ```
4. Push to the branch:
    ```sh
    git push origin feature-branch
    ```
5. Open a pull request.

### Pushing Changes to GitHub

1. Add changes to the staging area:
    ```sh
    git add .
    ```
2. Commit the changes:
    ```sh
    git commit -m 'Describe your changes'
    ```
3. Push the changes to the remote repository:
    ```sh
    git push origin main
    ```

## License

This project is licensed under the MIT License.