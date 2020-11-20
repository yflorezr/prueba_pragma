import { TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ScheduleComponent } from './schedule.component';
import { FormsModule } from '@angular/forms';


describe('ScheduleComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ScheduleComponent
      ],
      imports: [
        FormsModule
      ],
    }).compileComponents();
  }));

  it('should generate correct number of meals', async(() => {
    const fixture = TestBed.createComponent(ScheduleComponent);
    const sc = fixture.componentInstance;
    fixture.detectChanges();
    sc.itemsList = ['Hazel on 2011-10-10', 'Hazel on 2011-10-10', 'Hazel on 2011-10-10', 'Hazel on 2011-10-11', 'Hazel on 2011-10-11', 'Hazel on 2011-10-11']
    fixture.detectChanges();
    const li_len = fixture.debugElement.queryAll(By.css('li')).length;
    expect(li_len).toEqual(18);
  }));

  it('should generate correct number of days', async(() => {
    const fixture = TestBed.createComponent(ScheduleComponent);
    const sc = fixture.componentInstance;
    fixture.detectChanges();
    sc.itemsList = ['Hazel on 2011-10-10', 'Hazel on 2011-10-10', 'Hazel on 2011-10-10', 'Hazel on 2011-10-11', 'Hazel on 2011-10-11', 'Hazel on 2011-10-11']
    fixture.detectChanges();
    const div = fixture.debugElement.queryAll(By.css('div')).length;
    expect(div).toEqual(6);
  }));

  it('should not display anything if button is not clicked', async(() => {
    const fixture = TestBed.createComponent(ScheduleComponent);
    const sc = fixture.componentInstance;
    fixture.detectChanges();
    const div = fixture.debugElement.queryAll(By.css('div')).length;
    expect(div).toEqual(0);
  }));
});
