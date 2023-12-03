require("cypress-real-events")

describe("Test take screenshoot on desktop", () => {
    
    Cypress.on('window:before:unload', e => {
        e.stopImmediatePropagation()
    })
    Cypress.on('window:load', function(window) {
        const original = window.addEventListener;
        window.addEventListener = function() {
            if (arguments && arguments[0] === 'beforeunload') {
                return;
            }
            return original.apply(this, arguments);
        };
    });
    Cypress.on('window:load', function(window) {
        const original = window.addEventListener;
        window.addEventListener = function() {
            if (arguments && arguments[0] === 'beforeunload') {
                return;
            }
            return original.apply(this, arguments);
        };
    });

    it("Take screenshoot on desktop", () => {
        Cypress.on("uncaught:exception", () => {
            return false
        })
        cy.viewport(400, 764)
        cy.visit("https://dev.smkcoding.id").wait(3000)
        
        cy.get("header button.hamburger").click({ force: true }).wait(500)
        cy.get(".offcanvas.show").should("exist")
        
    cy.contains("header a", "Masuk")
    .invoke("attr", "href")
    .then(async url => {
        cy.window().then(win => win.location.href = url).reload().wait(2000);
        const magicOrigin = new URL(url)
        // const urlParams = new URLSearchParams(magicOrigin.searchParams);
        // const appToken = await generateDAppToken(urlParams.get("code"), urlParams.get("generatedToken"))
        cy.origin(magicOrigin.origin, { args: { } }, ({ }) => {
            Cypress.on("uncaught:exception", () => {
                return false
            })
            cy.get("input[type=email]").type("test@example.com")

        });

    })
    })

})