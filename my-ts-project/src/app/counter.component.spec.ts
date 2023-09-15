import {TestBed} from "@angular/core/testing"
import { CounterComponent } from "./counter.component"

describe("Unit testing a component", () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [CounterComponent]
        })
    } )
    it("Verify component instance", () =>{
        let fixture = TestBed.createComponent(CounterComponent)
        expect(fixture).toBeDefined()

    } )
    it("Verify data member in component", () =>{
        let fixture = TestBed.createComponent(CounterComponent)
        let obj = fixture.componentInstance
        expect(obj.count).toEqual(10)

    } )
})