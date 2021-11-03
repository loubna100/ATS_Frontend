import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageOffreComponent } from './page-offre.component';

describe('PageOffreComponent', () => {
  let component: PageOffreComponent;
  let fixture: ComponentFixture<PageOffreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageOffreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageOffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
