import React from 'react';
import { makeAutoObservable,action, observable } from 'mobx';

class PopupStore {
    popupData 
    popupVisible =false
    popupClientLeft
    parentContainerWidth
        constructor() {
        makeAutoObservable(this,{
            popupData: observable,
            popupVisible: observable,
            popupClientLeft: observable,
            parentContainerWidth: observable,

            setPopupDataStore: action.bound,
            setPopupVisible: action.bound,
            setPopupClientLeft: action.bound,
            setParentContainerWidth: action.bound,
        })
    }
    setPopupDataStore(data) {
        return this.popupData = data;
    }
    setPopupVisible(boolean) {
        return this.popupVisible = boolean;
    }
    setPopupClientLeft(clientLeft) {
        return this.popupClientLeft = clientLeft;
    }
    setParentContainerWidth(width) {
        return this.parentContainerWidth = width;
    }

}

const PopupStoreStore = new PopupStore();

export const PopupStoreStoreContext = React.createContext(PopupStoreStore);
export const usePopupStore = () => React.useContext(PopupStoreStoreContext)


