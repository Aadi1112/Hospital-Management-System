import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdloginComponent } from './adlogin.component';

describe('AdloginComponent', () => {
  let component: AdloginComponent;
  let fixture: ComponentFixture<AdloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdloginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
