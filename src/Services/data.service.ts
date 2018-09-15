export class DataService{
    
    /** Food related stuff. 
     * contains local storage and functions to add and get from storage.
     * Will be connected to a global storage using APIs.
     */

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

    /**HomeScreen Notifications
     * contains local storage and functions to add and get from storage.
     * Will be connected to a global storage using APIs.
     */

    private homeScreenNotf: {title: string, body: string, type: string, date: string}[] = [];
    
    getAllHomeScreenNotf(){
      return this.homeScreenNotf.slice();
    }

    addHomeScreenNotf(homeScreenNotf: {title: string, body: string, type: string, date: string}) {
      this.homeScreenNotf.push(homeScreenNotf);
    }
  }

  