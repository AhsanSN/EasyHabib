export class DataService{
    
    //food
    private tapalFoodItems: {title: string, price: string}[] = [];
    private cafe2GoFoodItems: {title: string, price: string}[] = [];
    private malangFoodItems: {title: string, price: string}[] = [];
  

    //adding items
    addTapalFoodItem(tapalFoodItem: {title: string, price: string}) {
      this.tapalFoodItems.push(tapalFoodItem);
    }

    addcafe2GoFoodItem(cafe2GoFoodItems: {title: string, price: string}) {
      this.cafe2GoFoodItems.push(cafe2GoFoodItems);
    }

    addmalangFoodItem(malangFoodItems: {title: string, price: string}) {
      this.malangFoodItems.push(malangFoodItems);
    }
  
    //getting items
    getTapalFoodItems() {
      return this.tapalFoodItems.slice();
    }

    getcafe2GoFoodItems() {
      return this.cafe2GoFoodItems.slice();
    }

    getmalangFoodItems() {
      return this.malangFoodItems.slice();
    }
    
  }