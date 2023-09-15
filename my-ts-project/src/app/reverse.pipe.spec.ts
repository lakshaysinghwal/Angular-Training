import { ReversePipe } from "./reverse.pipe"

//Test suite
describe("Unit Testing Pipe Example", () => {
    //Test Case
    it("Verify reverse pipe", () => {
        let rp = new ReversePipe()
        expect(rp.transform("ABCD")).toEqual("DCBA")
    })
})