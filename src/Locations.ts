export interface BankLocation {
  type: number;
  latLng: number[];
  lat: number;
  lng: number;
  address1: string;
  address2: null | string;
  phone: string;
  hoursDescription: string | null;
  icon: string;
  zoom: number;
  pref: number;
  suburb: string;
  postcode: string;
  branchPage: null | string;
  isBranch: boolean;
  isAtm: boolean;
}

export async function getLocations(): Promise<BankLocation[]> {
  const response = await fetch("/locations.json");

  if (response.ok) {
    return response.json();
  } else {
    throw new Error(response.statusText);
  }
}
