export class DataService{
    
    private tapalFoodItems: {title: string, price: string}[] = [];
  
    addTapalFoodItem(tapalFoodItem: {title: string, price: string}) {
      this.tapalFoodItems.push(tapalFoodItem);
    }
  
    getTapalFoodItem() {
      return this.tapalFoodItems.slice();
    }

    
  }