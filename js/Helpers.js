/**
 * Retrieves the first element that matches the specified selector.
 *
 * @param {string} element - The CSS selector of the element to retrieve.
 * @returns {Element|null} The first element that matches the selector, or null if no element is found.
 */
const el = (element) => document.querySelector(element);

/**
 * Retrieves a list of elements that match the specified selector.
 *
 * @param {string} elements - The CSS selector of the elements to retrieve.
 * @returns {NodeList} A list of elements that match the selector.
 */
const els = (elements) => document.querySelectorAll(elements);
const setstorage=(key,value)=>{
    localStorage.setItem(key,JSON.stringify({
        data :value
    })
    );
  }  ;

  const getstorage=(key)=>{
    const data=localStorage.getItem(key);
    if (data) return JSON.parse(data).data;
    return null;
  };

  function findProduct(productName){
    let existingEntries =getstorage("products");
    if (existingEntries==null) {
      return true;
    }
    let obj1 = existingEntries.find(item => item.productName === productName);
    if (obj1==null){
      return true;
    }
    else{
      return false;
    }
    
  }
  
