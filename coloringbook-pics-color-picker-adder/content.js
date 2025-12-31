(function() {
    'use strict';

    // -----------------------------------------------------------------
    // TEST LOG: You can check the console (F12) to see if it's running.
    // -----------------------------------------------------------------
    console.log("v2 coloringbook.pics Color Picker Adder [Chrome Extension] is running!");
    // -----------------------------------------------------------------


    const box4 =  document.getElementById("box4")
    let lastBox = box4
    let lastBoxNumber = 4

    function createAddButton() {
        const button = document.createElement("button");
        button.textContent = "+";
        button.style.cssText = `
            width: 24px;
            height: 24px;
            border-radius: 4px;
            border: 1px solid #ccc;
            background-color: #fff;
            color: #333;
            font-size: 16px;
            font-weight: bold;
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 0;
            line-height: 1;
            transition: all 0.2s ease;
        `;

        // Add hover effect
        button.addEventListener('mouseenter', () => {
            button.style.backgroundColor = '#007bff';
            button.style.color = '#fff';
            button.style.borderColor = '#007bff';
        });

        button.addEventListener('mouseleave', () => {
            button.style.backgroundColor = '#fff';
            button.style.color = '#333';
            button.style.borderColor = '#ccc';
        });

        // Add click effect
        button.addEventListener('mousedown', () => {
            button.style.transform = 'scale(0.95)';
        });

        button.addEventListener('mouseup', () => {
            button.style.transform = 'scale(1)';
        });

        let addDiv = document.createElement("div")
        addDiv.appendChild(button);
        return addDiv;
    }

    /**
     * Finds product links within a given DOM node and adds the PRISM tag.
     */
    function processNode(node) {
        const productLinks = node.querySelectorAll('a[href*=".html"]:not([data-prism-processed])');

        productLinks.forEach(link => {
            link.dataset.prismProcessed = "true";
            const match = link.href.match(skuRegex);

            if (match && match[1]) {
                const container = link.closest('article');

                if (container) {
                    const sku = match[1].toUpperCase();

                    // Only add links that are enabled in settings
                    const linksToAdd = [];

                    if (settings.prism.enabled) {
                        linksToAdd.push(createPrismLink(sku));
                    }
                    if (settings.wb.enabled) {
                        linksToAdd.push(createWorkbenchLink(sku));
                    }
                    if (settings.copy.enabled) {
                        linksToAdd.push(createCopyButton(sku));
                    }

                    // Only proceed if at least one link is enabled
                    if (linksToAdd.length > 0) {
                        container.style.position = "relative";

                        if (!container.querySelector('[data-prism-link="true"]')) {
                            // Append all enabled links first (so we can measure them)
                            linksToAdd.forEach(element => container.append(element));

                            // Position links dynamically based on their widths
                            let currentLeft = 8; // Start position
                            const gap = 4; // Gap between links

                            linksToAdd.forEach(element => {
                                element.style.left = `${currentLeft}px`;
                                // Get the actual width of the element
                                const width = element.offsetWidth;
                                currentLeft += width + gap;
                            });

                            // Add hover event listeners to show/hide all links
                            container.addEventListener('mouseenter', () => {
                                linksToAdd.forEach(element => {
                                    element.style.opacity = "1";
                                });
                            });
                            container.addEventListener('mouseleave', () => {
                                linksToAdd.forEach(element => {
                                    element.style.opacity = "0";
                                });
                            });
                        }
                    }
                }
            }
        });
    }

    function addColorPicker() {
        let nextBoxNumber = lastBoxNumber + 1;
        let nextBox = `<div id="box${nextBoxNumber}" class="box" style="border-color: rgb(255, 255, 0);">
    <div id="customcolor${nextBoxNumber}" class="customcolorx" style="background: #000;fill:#000;" x="0" y="0"
         onclick="selected(this.id)"></div>
    <input type="color" value="#ffff00" id="colorPicker${nextBoxNumber}" class="farba"
           title="Click on the palette and choose any color" onclick="selected(this.id)"></div>`
        lastBox.after(nextBox);

        let nextColorPicker = document.getElementById("colorPicker" + nextBoxNumber);
        let nextCustomcolor = document.getElementById("customcolor"+ nextBoxNumber);
        nextBox.style.borderColor = nextColorPicker.value;

        nextColorPicker.addEventListener("input", function (event) {
            nextBox.style.borderColor = event.target.value;
        }, false);
        nextColorPicker.addEventListener("input", function (event) {
            nextCustomcolor.style.background = event.target.value;
            nextCustomcolor.style.fill = event.target.value;
        }, false);

        lastBox = nextBox;
        lastBoxNumber = nextBoxNumber;
    }

    // Load settings and initialize
    (async function init() {

        // Run immediately on what's already on the page
        box4.after(createAddButton());

    })();


})();