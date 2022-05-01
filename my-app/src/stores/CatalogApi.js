import React from 'react';
import { makeAutoObservable, action, observable } from 'mobx';
import { apiMocks } from '@/api/mock/apiMocks'

class CatalogApi {
    catalog = []
    isGallery = true

    constructor() {
        makeAutoObservable(this, {
            isGallery: observable,
            setMap: action.bound,
            setGallery: action.bound,
            setCatalog: action.bound,
        })
    }
    setMap() {
        this.isGallery = false
    }
    setGallery() {
        this.isGallery = true
    }
    resetState() {
        this.catalog = []
        this.catalog.length === 0 && this.setGallery()
    }
    setCatalog(route) {
        if (route === 'Объявления User' || route === 'Объявления Realtor') {
            this.resetState()
            return this.catalog = apiMocks.RecommendationMockApi
        } else if (route === 'ApartmentsPage' || route === 'ApartmentsPageRealtor') {
            this.resetState()
            return this.catalog = apiMocks.ApartmentMockApi
        } else if (route === 'HousesPage' || route === 'HousesPageRealtor') {
            this.resetState()
            return this.catalog = apiMocks.HousesMockApi
        } else if (route === 'PlotsPage' || route === 'PlotsPageRealtor') {
            this.resetState()
            return this.catalog = apiMocks.PlotMockApi
        } else if (route === 'CommercePage' || route === 'CommercePageRealtor') {
            this.resetState()
            return this.catalog = apiMocks.CommerceMockApi
        } else if (route === 'RentPage' || route === 'RentPageRealtor') {
            this.resetState()
            return this.catalog = apiMocks.RentMockApi
        } else if (route === 'NoveltiesPage' || route === 'NoveltiesPageRealtor') {
            this.resetState()
            return this.catalog = apiMocks.NoveltiesMockApi;
        }
        else {
            return
        }
    }
}

const catalogApiStore = new CatalogApi();

export const CatalogApiStoreStoreContext = React.createContext(catalogApiStore);
export const useCatalogApiStore = () => React.useContext(CatalogApiStoreStoreContext)


