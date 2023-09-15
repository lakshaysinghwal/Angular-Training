import { LoginService } from "./login.service"

describe("verify service", () => {
    let svc: LoginService

    beforeEach(() => {
        svc = new LoginService()
    })

    it("Verify Positive Login", () => {
        expect(svc.validateUser("admin", "admin")).toBeTruthy
    })
    it("Verify Negative Login", () => {
        expect(svc.validateUser("lakshay", "admin")).toBeFalsy
    })
    
})