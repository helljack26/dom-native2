import React from 'react';
import { makeObservable, action, observable } from 'mobx';

class GalleryButtonStore {
    btnState = false;
    constructor() {
        makeObservable(this, {
            btnState: observable,
            changeView: action.bound,
        })
    }
    changeView() {
        this.btnState = this.btnState ? false : true
    }
}

const galleryButtonStore = new GalleryButtonStore();

export const GalleryButtonStoreContext = React.createContext(galleryButtonStore);
export const useGalleryButtonStore = () => React.useContext(GalleryButtonStoreContext)