interface CarDTORent {
  period: string
  price: number
}

interface CarDTOAccessories {
  type: string
  name: string
}

export interface CarDTO {
  id: string
  brand: string
  name: string
  about: string
  rent: CarDTORent
  fuel_type: string
  thumbnail: string
  accessories: CarDTOAccessories[]
  photos: string[]
}