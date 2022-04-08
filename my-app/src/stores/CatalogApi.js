import React from 'react';
import { makeAutoObservable, action, observable } from 'mobx';
import { apiMocks } from '../api/mock/apiMocks'

class CatalogApi {
    catalog = []
    mapBtnState = false

    constructor() {
        makeAutoObservable(this, {
            mapBtnState: observable,
            changeToMap: action.bound,
            setCatalog: action.bound,
        })
    }
    changeToMap() {
        this.mapBtnState = this.mapBtnState ? false : true
    }
    setCatalog(route) {
        if (route === 'ApartmentsPage') {
            this.catalog = []
            return this.catalog = apiMocks.ApartmentMockApi

        } else if (route === 'HousesPage') {
            this.catalog = []
            return this.catalog = apiMocks.HousesMockApi
        } else {
            return
        }
    }
}



const catalogApiStore = new CatalogApi();

export const CatalogApiStoreStoreContext = React.createContext(catalogApiStore);
export const useCatalogApiStore = () => React.useContext(CatalogApiStoreStoreContext)


