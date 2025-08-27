const ProductCategoryRow = ({category}) => {
  return (
      <tr className="bg-gray-100">
        <th colSpan="2" className="text-left px-4 py-2 font-bold text-gray-700">
          {category} 
        </th>
      </tr>
  );
}

const ProductRow = ({product}) => {
   const name = product.stocked ? (product.name) : 
   (<span className="text-red-500 font-medium">
   {product.name}
   </span>);

   return (
     <tr className="border-b hover:bg-gray-50">
     <td className="px-4 py-2">{name}</td>
     <td className="px-4 py-2">{product.price}</td>
     </tr>
   );
}

const ProductTable = ({product}) => {
  const rows = [];
  let lastCategory = null;
  
  product.forEach((product) => {
     if(product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow 
         category={product.category}
         key={product.category}/>
      );
      lastCategory = product.category;
     }
     rows.push( <ProductRow product={product} key={product.name} /> );
  });

  return (
    <table className="min-w-full border border-gray-200 rounded-lg shadow-sm overflow-hidden">
      <thead className="bg-gray-200">
        <tr>
          <th className="px-4 py-2 text-left font-bold text-gray-700">Name</th>
          <th className="px-4 py-2 text-left font-bold text-gray-700">Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

const SearchBar = () => {
  return (
    <form className="mb-4 space-y-2">
      <input 
      type="text" 
      placeholder="Search..."
      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-blue-500" />
      <label className="flex items-center space-x-2 text-gray-700">
        <input 
        type="checkbox"
        className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"/>
        <span>Only show available products</span>
      </label>
    </form>
  );
}

const FilterableProductTable = ({product}) => {
  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white rounded-xl shadow-md">
        <SearchBar />
        <ProductTable product={product} />
    </div>
  );
}
 
const PRODUCTS = [
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
];

const App = () => <FilterableProductTable product={PRODUCTS} />

export default App;