import {makeAutoObservable} from "mobx";

export default class DeviceStore{
    constructor() {
       this._types=[
       ]
        this._brands=[
        ]
        this._devices=[
            {id:1, name:"iphone 12",price: 23000, rating:4, img:'C:\\Users\\Marya\\WebstormProjects\\online-store-App\\server\\static\\8af81682-7adf-4eba-8be5-dce1d4151daf.jpg'},
            {id:2, name:"iphone 12",price: 23000, rating:4, img:'C:\\Users\\Marya\\WebstormProjects\\online-store-App\\server\\static\\8af81682-7adf-4eba-8be5-dce1d4151daf.jpg'},
            {id:3, name:"iphone 12",price: 23000, rating:4, img:'C:\\Users\\Marya\\WebstormProjects\\online-store-App\\server\\static\\8af81682-7adf-4eba-8be5-dce1d4151daf.jpg'},
            {id:4, name:"iphone 12",price: 23000, rating:4, img:'C:\\Users\\Marya\\WebstormProjects\\online-store-App\\server\\static\\8af81682-7adf-4eba-8be5-dce1d4151daf.jpg'},
            {id:5, name:"iphone 12",price: 23000, rating:4, img:'C:\\Users\\Marya\\WebstormProjects\\online-store-App\\server\\static\\8af81682-7adf-4eba-8be5-dce1d4151daf.jpg'},
            {id:6, name:"iphone 12",price: 23000, rating:4, img:'C:\\Users\\Marya\\WebstormProjects\\online-store-App\\server\\static\\8af81682-7adf-4eba-8be5-dce1d4151daf.jpg'}
        ]
        this._selectedType={}
        this._selectedBrand={}
        makeAutoObservable(this)//слідкує за станом змінних та рендирить компоненти
    }

    setTypes(types){
        this._types=types
    }

    setBrands(brands){
        this._brands=brands
    }
    setDevices(devices){
        this._devices=devices
    }
    setSelectedType(type){
        this._selectedType=type
    }
    setSelectedBrand(brand){
        this._selectedBrand=brand
    }
    get types(){
        return this._types
    }
    get brands(){
        return this._brands
    }
    get devices(){
        return this._devices
    }
    get selectedType(){
        return this._selectedType
    }
    get selectedBrand(){
        return this._selectedBrand
    }
}