import React from 'react';
import { makeAutoObservable, action, observable } from 'mobx';

class PopupStore {
    popupData = []
    popupVisible = false
    popupClientLeft
    parentContainerWidth
    constructor() {
        makeAutoObservable(this, {
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
        console.log("🚀 ~ file: popupStore.js ~ line 23 ~ PopupStore ~ setPopupDataStore ~ data", data)
        return this.popupData = data;
    }
    setPopupVisible(boolean) {
        console.log("🚀 ~ file: popupStore.js ~ line 26 ~ PopupStore ~ setPopupVisible ~ boolean", boolean)
        return this.popupVisible = boolean;
    }
    setPopupClientLeft(clientLeft) {
        console.log("🚀 ~ file: popupStore.js ~ line 30 ~ PopupStore ~ setPopupClientLeft ~ clientLeft", clientLeft)
        return this.popupClientLeft = clientLeft;
    }
    setParentContainerWidth(width) {
        console.log("🚀 ~ file: popupStore.js ~ line 34 ~ PopupStore ~ setParentContainerWidth ~ width", width)
        return this.parentContainerWidth = width;
    }

}

const PopupStoreStore = new PopupStore();

export const PopupStoreStoreContext = React.createContext(PopupStoreStore);
export const usePopupStore = () => React.useContext(PopupStoreStoreContext)


