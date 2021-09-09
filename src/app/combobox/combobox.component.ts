import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-combobox',
  templateUrl: './combobox.component.html',
  styleUrls: ['./combobox.component.scss']
})
export class ComboboxComponent implements OnInit {

  constructor() { }
  public districts : any = [];
  public vietNamData = [
    {
      city: "Chọn Thành Phố",
      district: []
    },
    {
    city: 'Hà Nội',
    district: [
      "Chương Mỹ",
      "Mê Linh",
      "Đông Anh",
      "Sóc Sơn",
      "Thanh Oai",
      "Hà Đông",
      "Thanh Xuân"
    ]
  },
  {
    city: 'HCM',
    district: [
      "Quận 1",
      "Quận 2",
      "Quận 3",
      "Quận 4",
      "Quận 5",
      "Quận 6",
      "Quận 7",
      "Quận 8",
      "Quận 9",

    ]
  }
]
  ngOnInit(): void {
  }
  public changeCity(event:any){
    const city = event.target.value;
    console.log("event", city)
    if(!city){
      return;
    }
    //cách 1:
    // const search = this.vietNamData.filter((data) => data.city ===  city )
    // if(search && search.length>0){
    //   this.districts = search[0].district;
    // }
    

    //cách 2:
    this.districts = this.vietNamData.find((data) => data.city === city)?.district || [];
  }

}
