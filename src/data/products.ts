export interface Product {
  id: string;
  name: string;
  description: string;
  casNumber?: string;    // Optional CAS Number
  packSize?: string;     // Optional Pack Size
  category?: string;     // Made optional since it's not in current data
  price: number;
  image: string;
}

export const products: Product[] = [
  {
    "id": "270458-1L",
    "name": "1-Methyl-2-pyrrolidinone CHROMASOLV™ Plus, for HPLC, ≥99%",
    "description": "1-Methyl-2-pyrrolidone; N-Methyl-2-pyrrolidone; NMP",
    "casNumber": "872-50-4",
    "packSize": "1L",
    "price": 10899,
    "image": "/https://lab.honeywell.com/shop/media/catalog/product/cache/ae13028c52290a7248189008ed57c9bd/8/d/8dff797f7b8151e571e80c683d5d3db2a0275e0f4d68445f4cb68187f0ee0b8c.jpeg"
  },
  {
    "id": "34856-2.5L",
    "name": "Dichloromethane CHROMASOLV™, for HPLC, ≥99.8%, contains amylene as stabilizer",
    "description": "Methylene chloride",
    "casNumber": "75-09-2",
    "packSize": "2.5L",
    "price": 8260,
    "image": "/https://lab.honeywell.com/shop/media/catalog/product/cache/ae13028c52290a7248189008ed57c9bd/9/7/97396f625fd0897ac7566fc410ee29722c7d98a6601fe7dd6959ba39b26e449d.jpeg"
  },
  {
    "id": "34488-2.5L",
    "name": "Dichloromethane CHROMASOLV™, for pesticide",
    "description": "Developed especially for the application in residue analysis of pesticides and other low-volatile substances using GC",
    "casNumber": "75-09-2",
    "packSize": "2.5L",
    "price": 60413,
    "image": "/https://lab.honeywell.com/shop/media/catalog/product/cache/ae13028c52290a7248189008ed57c9bd/9/7/97396f625fd0897ac7566fc410ee29722c7d98a6601fe7dd6959ba39b26e449d.jpeg"
  },
  {
    "id": "34730-1L",
    "name": "HYDRANAL™ - Solvent E Medium for volumetric two-component Karl Fischer titration (ethanol-based)",
    "description": "Hydranal™ is the most trusted brand in Karl Fischer titration because of its dedication to quality, consistency and continued innovation.",
    "packSize": "1L",
    "price": 14408,
    "image": "/https://lab.honeywell.com/shop/media/catalog/product/cache/ae13028c52290a7248189008ed57c9bd/0/c/0cebdabb6dc8868123d151b76f52485684e9b23bea23a96fda19c43eae6efbaf.jpeg"
  },
  {
    "id": "304-1L",
    "name": "N-Methylpyrrolidone B&J Brand™, for HPLC, GC and spectrophotometry, >99.5%",
    "description": "Nmp; N-Methyl-2-Pyrrolidone; N-Methyl-2-Pyrrolidinone",
    "casNumber": "872-50-4",
    "packSize": "1L",
    "price": 140859,
    "image": "/https://lab.honeywell.com/shop/media/catalog/product/placeholder/default/honeywell.jpg"
  },
  {
    "id": "34871-1L",
    "name": "1-Propanol CHROMASOLV™, for HPLC, ≥99.9%",
    "description": "For HPLC and organic synthesis, High-purity, multipurpose solvents",
    "casNumber": "71-23-8",
    "packSize": "1L",
    "price": 6641,
    "image": "/https://lab.honeywell.com/shop/media/catalog/product/cache/ae13028c52290a7248189008ed57c9bd/5/0/501fb4e461b7fdb6875155774bbd694e063e00137d59347f73b4abfb0113b237.jpeg"
  },
  {
    "id": "17844-250G",
    "name": "Sodium phosphate monobasic for HPLC, ≥99.0%",
    "description": "Monosodium dihydrogen orthophosphate; Monosodium phosphate; Sodium dihydrogen phosphate",
    "casNumber": "7558-80-7",
    "packSize": "250G",
    "price": 42932,
    "image": "/https://lab.honeywell.com/shop/media/catalog/product/cache/ae13028c52290a7248189008ed57c9bd/2/4/245ad94789c68088d72f9389cc305434fcbd01963e82223915280d5344d44228.jpeg"
  },
  {
    "id": "34816-1L-SC",
    "name": "HYDRANAL™ - Composite 5 K Titrating agent for volumetric one-component Karl Fischer titration in aldehydes and ketones (methanol free)",
    "description": "Karl Fischer reagent",
    "packSize": "1L",
    "price": 18945,
    "image": "/https://lab.honeywell.com/shop/media/catalog/product/cache/ae13028c52290a7248189008ed57c9bd/0/e/0e7afefc59c5323cae7f80a10dcf440ed47f418672a201acebf61f601f9b98a0.jpeg"
  },
  {
    "id": "34738-1L",
    "name": "HYDRANAL™ - KetoSolver Medium for volumetric one-component Karl Fischer titration in aldehydes and ketones (methanol free)",
    "description": "Karl Fischer medium",
    "packSize": "1L",
    "price": 14266,
    "image": "/https://lab.honeywell.com/shop/media/catalog/product/cache/ae13028c52290a7248189008ed57c9bd/f/7/f7adbd4443739f7b41827e33ddf129613d8432dfff8aff83a5993676de7fdf7a.jpeg"
  },
  {
    "id": "31232-250G",
    "name": "Iron(III) chloride 6H2O",
    "description": "Ferric chloride hexahydrate",
    "casNumber": "10025-77-1",
    "packSize": "250G",
    "price": 6178,
    "image": "/https://lab.honeywell.com/shop/media/catalog/product/cache/ae13028c52290a7248189008ed57c9bd/a/5/a5c0379febc11959eaf81a1e1b86f7e13b6108b02a69b58fadddc0100c5f3c63.jpeg"
  }
];