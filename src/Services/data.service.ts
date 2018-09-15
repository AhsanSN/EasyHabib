export class DataService{
    
    //food
    private tapalFoodItems: {title: string, price: string}[] = [];
    private cafe2GoFoodItems: {title: string, price: string}[] = [];
    private malangFoodItems: {title: string, price: string}[] = [];
  

    //adding items
    addTapalFoodItem(tapalFoodItem: {title: string, price: string}) {
      this.tapalFoodItems.push(tapalFoodItem);
    }

    addcafe2GoFoodItems(cafe2GoFoodItems: {title: string, price: string}) {
      this.cafe2GoFoodItems.push(cafe2GoFoodItems);
    }

    addmalangFoodItems(malangFoodItems: {title: string, price: string}) {
      this.tapalFoodItems.push(malangFoodItems);
    }
  
    //getting items
    getTapalFoodItem() {
      return this.tapalFoodItems.slice();
    }

    getcafe2GoFoodItems() {
      return this.cafe2GoFoodItems.slice();
    }

    getmalangFoodItems() {
      return this.malangFoodItems.slice();
    }
    
  }