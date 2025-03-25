/* eslint-disable no-unused-vars */
const shortenText = (text)=>{
return text.split(' ').slice(0,3).join("")
} 

function searchProducts (products,search){
    if(!search) return products
    const productSearched = products.filter((pro)=>pro.title.toLowerCase().includes(search))
 
    return productSearched
}

function filterProducts (products, category){
  if(!category)return products
  const productsFiltered = products.filter(pro=>pro.category===category)
  return productsFiltered
}

const createQueryObj = (currentQuery, newQuery)=>{
    if(newQuery.category ==="all"){
        const {category, ...rest} = currentQuery
        return rest
    }
    if(newQuery.search ===""){
        const {search, ...rest } = currentQuery
        return rest
    }
    return{...currentQuery, ...newQuery,}
}
const getInitQuery = (searchParams) => {
    const query = {};

    if (!(searchParams instanceof URLSearchParams)) {
        console.error("searchParams is not a valid URLSearchParams instance:", searchParams);
        return query;
    }

    const category = searchParams.get("category") || "";
    const search = searchParams.get("search") || ""; 

    if (category) query.category = category;
    if (search) query.search = search;

    return query; 
};
const sumProducts = (products) => {
    const itemsCounter = products.reduce((acc,curr) => acc + curr.quantity ,0)
    const total = products.reduce((acc,curr) => acc + curr.price * curr.quantity ,0).toFixed(2)

    return {itemsCounter, total}
}
const productQuantity = (state,id) => {
const index = state.selectedItems.findIndex(i =>i.id ===id)
    if (index !== -1) { 
        return state.selectedItems[index].quantity
    } else {
        return 0
    }
    
}
export { sumProducts,productQuantity, shortenText,searchProducts,filterProducts ,createQueryObj,getInitQuery}