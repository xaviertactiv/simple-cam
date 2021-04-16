import { Component, ElementRef, OnInit, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
})
export class CameraComponent implements AfterViewInit {
  @ViewChild('camera', {static: false}) camera: ElementRef;
  @ViewChild('Editor', {static: false}) editorEl: ElementRef;
  

  imageChangedEvent: any;
  imageData: any;
  filter: string;
  openFilter: boolean = false;
  constructor() { }

  ngAfterViewInit(): void {
    this.camera.nativeElement.click();
  }


  handleChange(event) {
    const reader = new FileReader();

    reader.onload = () => {
      this.imageData = reader.result;
    }

    reader.readAsDataURL(event.target.files[0]);
  }

  handleApplyFilter(filterName) {
    this.filter = filterName;
  }


}
