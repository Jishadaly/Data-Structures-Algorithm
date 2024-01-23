// class HashTable {
//   constructor(size) {
//     this.table = new Array(size)
//     this.size = size
//   }

//   hash(key) {

//     let total = 0
//     for (let i = 0; i < key.length; i++) {

//       total += key.charCodeAt(i);
//     }

//     return total % this.size
//   }

//   set(key , value){
//     const index = this.hash(key)
//     let bucket = this.table[index]

//     if (!bucket) {

//        this.table[index] = [[key,value]]
//     }else{
//       let sameKeyItem = bucket.find(item => item[0] === key)
//       if (sameKeyItem) {
//         sameKeyItem [1] = value
//       }else{
//         bucket.push([key,value])
//       }
//     }
//   }
//   get(key){
//      const index = this.hash(key)
//     //  return this.table[index]
//     let bucket = this.table[index]
//     if (bucket) {
//        const sameKeyItem = bucket.find(item => item[0]=== key)
//        if (sameKeyItem) {
//         return sameKeyItem[1]
//        }
//     }
//     return undefined
//   }

//   remove(key){
//     const index = this.hash(key)
//     const bucket = this.table[index]
//     if (bucket) {
//        const sameKeyItem = bucket.find(item => item[0] === key)
//        if (sameKeyItem) {
//            bucket.splice( bucket.indexOf(sameKeyItem),1)
//        }
//     }
//   }
//   display(){
//      for(let i=0 ; i<this.table.length;i++){
//       if (this.table[i]) {
//          console.log(this.table[i]);
//       }
//      }
//   }

// }


// class HashTable {
//   constructor(size){
//     this.table = new Array(size)
//     this.size = 0
//   }
//   hash(key){
//     let total
//     for( let i=0;i<key.length;i++){
//        total += key.charCodeAt(i)
//     }
//     return total % this.size
//   }

//   set(key,value){
//     const index = this.hash(key)
//     let bucket = this.table[index]
//     if (!bucket) {
//        this.table[index] = [[key,value]]
//     }else{
//       let sameKeyItem = bucket.find(item => item[0] === key)
//       if (sameKeyItem) {
//          sameKeyItem[1] = value
//       }else{
//         bucket.push([key,value])
//       }
//     }

    

//   }
//   get(key){
//      let index = this.hash(key)
//      let bucket = this.table[index]
//     if (bucket) {
//       let sameKeyItem = bucket.find( item => item[0] === key)
//       if (sameKeyItem) {
//         return sameKeyItem[1]
//       }
//     }
//     return undefined
//   }

//   display(){
   
//       for(let i=0 ; i< this.table.length ;i++){
//         if (this.table[i]) {
//           console.log(this.table[i]);
//           console.log("b");
//         }
//       }
//     }

//     remove(key){
//       const index = this.hash(key)
//       const bucket = this.table[index]
//       if (bucket) {
//         let sameKey = bucket.find(item => item === key)
//         if (sameKey) {
//           bucket.splice(bucket.indexOf(sameKey),1)
//         }
//       }
//     }
  

// }



// class HashTable {
//   constructor(size){
//     this.table = new Array(size)
//     this.size = 0
//   }
//   hash(key){
//     let total
//     for(let i=0;i<key.length;i++){
//       total = total+ key.charCodeAt(i)
//     }
//     return total% this.size
//   }
//   set(key,value){
//     const index = this.hash(key)
//     let bucket = this.table[index]
//     if (!bucket) {
//       this.table[index] = [[key,value]]
//     }else{
//       let samekey = bucket.find(item => item[0] === key)
//       if (samekey) {
//          samekey[1] = value
//       }else{
//         bucket.push([key,value])
//       }
//     }
//   }

//   get(key){
//      let index = this.hash(key)
//      let bucket = this.table[index]
//      if (bucket) {
//         let samkey = bucket.find(item => item[0] === key )
//         if (samkey) {
//            return samkey[1]
//         }
//      }
//      return undefined
//   }

//   display(){
//      for(let i=0;i<this.table.length;i++){
//       if (this.table[i]) {
//         console.log(this.table[i]);
//       }
//      }
//   }
//   remove(key){
//     const index = this.hash(key)
//     let bucket = this.table[index]
//     if (bucket) {
//       let sameKey = bucket.find(item => item[0] === key)
//       if (sameKey) {
//         bucket.splice(bucket.indexOf(sameKey),1)
//       }
//     }
//   }

// }

class HashTable{
   constructor(size){
      this.table = new Array(size)
      this.size = size
   }

   hash(key){
     let total
     for(let i=0;i<key.length;i++){
       total = total+ key.charCodeAt(i)
     }
     return total % this.size
   }
   
   set(key,value){
    const index = this.hash(key)
    let bucket = this.table[this.index]
    if (!bucket) {
       this.table[index] = [[key,value]]
    }else{
      let samekey = bucket.find(item => item[0]===key)
      if (samekey) {
        samekey[1] = value
      }else{
        bucket.push([key,value])
      }
    }
   }

   get(key){
     const index = this.hash(key)
     const bucket = this.table[index]

     if (bucket) {
       let sameKey = bucket.find(item => item[0]===key)
       if (sameKey) {
         return sameKey[1]
       }
     }
     return undefined
   }


   remove(key){
     const index = this.hash(key)
     let bucket = this.table[index]
     if (bucket) {
      let sameKey = bucket.find(item => item[0] === key)
      if (sameKey) {
        bucket.splice(bucket.indexOf(sameKey),1)
      }
     }
   }


   display(){
    if (this.size === 0) {
      return null
    }else{
      for( let i=0;i<this.table.length;i++){
        if (this.table[i]) {
          console.log(this.table[i]);
        }
      }
    }
   }


}



const table = new HashTable(50)
table.set("name", "jishad")
table.set("age", "22")
table.set("name", "jishad")

table.display()
