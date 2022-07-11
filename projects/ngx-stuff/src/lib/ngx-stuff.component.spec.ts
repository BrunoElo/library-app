import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxStuffComponent } from './ngx-stuff.component';

describe('NgxStuffComponent', () => {
  let component: NgxStuffComponent;
  let fixture: ComponentFixture<NgxStuffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxStuffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxStuffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
