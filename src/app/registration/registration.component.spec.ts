import { TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RegistrationComponent } from './registration.component';
import { FormsModule } from '@angular/forms';


describe('RegistrationComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RegistrationComponent
      ],
      imports: [
        FormsModule
      ],
    }).compileComponents();
  }));

  it('should generate list on button click', async(() => {
    const fixture = TestBed.createComponent(RegistrationComponent);
    const sc = fixture.componentInstance;
    fixture.detectChanges();
    sc.names = "Samantha\nJulia\nFranco\nJustin";
    sc.dates = "2011-10-10 to 2011-10-11\n2011-10-11 to 2011-10-29\n2011-10-10 to 2011-10-12\n2011-11-10 to 2011-11-12";
    fixture.detectChanges();

    const but = fixture.debugElement.queryAll(By.css('button'))[0].nativeElement;
    but.click();
    fixture.detectChanges();
    expect(sc.items).toEqual(['Samantha on 2011-10-10', 'Samantha on 2011-10-11', 'Julia on 2011-10-11', 'Julia on 2011-10-12', 'Julia on 2011-10-13', 'Julia on 2011-10-14', 'Julia on 2011-10-15', 'Julia on 2011-10-16', 'Julia on 2011-10-17', 'Julia on 2011-10-18', 'Julia on 2011-10-19', 'Julia on 2011-10-20', 'Julia on 2011-10-21', 'Julia on 2011-10-22', 'Julia on 2011-10-23', 'Julia on 2011-10-24', 'Julia on 2011-10-25', 'Julia on 2011-10-26', 'Julia on 2011-10-27', 'Julia on 2011-10-28', 'Julia on 2011-10-29', 'Franco on 2011-10-10', 'Franco on 2011-10-11', 'Franco on 2011-10-12', 'Justin on 2011-11-10', 'Justin on 2011-11-11', 'Justin on 2011-11-12']);
  }));

});
