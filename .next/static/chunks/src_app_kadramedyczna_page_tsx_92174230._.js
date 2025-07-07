(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/kadramedyczna/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>MedicalStaffPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
"use client";
;
;
;
const staff = [
    {
        name: "dr n. med. Anna Nowak",
        title: "Ordynator Oddziału Chirurgii",
        image: "/staff/anna-nowak.jpg",
        description: "Specjalistka chirurgii ogólnej z ponad 20-letnim doświadczeniem. Uczestniczka licznych konferencji naukowych."
    },
    {
        name: "lek. Tomasz Kowalski",
        title: "Pediatra",
        image: "/staff/tomasz-kowalski.jpg",
        description: "Zajmuje się opieką nad najmłodszymi pacjentami, specjalizuje się w chorobach zakaźnych wieku dziecięcego."
    },
    {
        name: "mgr Elżbieta Wiśniewska",
        title: "Pielęgniarka Oddziałowa",
        image: "/staff/elzbieta-wisniewska.jpg",
        description: "Koordynuje pracę personelu pielęgniarskiego. Posiada wieloletnie doświadczenie w opiece szpitalnej."
    },
    {
        name: "dr hab. Michał Zawadzki",
        title: "Kardiolog",
        image: "/staff/michal-zawadzki.jpg",
        description: "Ekspert w diagnostyce chorób serca. Prowadzi badania naukowe nad prewencją chorób wieńcowych."
    },
    {
        name: "lek. Karolina Zielińska",
        title: "Ginekolog",
        image: "/staff/karolina-zielinska.jpg",
        description: "Specjalistka w zakresie ginekologii i położnictwa. Opiekuje się kobietami na każdym etapie życia."
    },
    {
        name: "dr Piotr Maj",
        title: "Ortopeda",
        image: "/staff/piotr-maj.jpg",
        description: "Zajmuje się diagnostyką i leczeniem urazów narządu ruchu. Pracuje z pacjentami sportowymi."
    },
    {
        name: "mgr Monika Baran",
        title: "Fizjoterapeutka",
        image: "/staff/monika-baran.jpg",
        description: "Pomaga pacjentom wracać do sprawności po urazach i operacjach. Specjalistka rehabilitacji neurologicznej."
    },
    {
        name: "dr n. med. Jakub Wrona",
        title: "Anestezjolog",
        image: "/staff/jakub-wrona.jpg",
        description: "Odpowiada za bezpieczeństwo pacjentów podczas zabiegów operacyjnych. Ekspert w leczeniu bólu."
    },
    {
        name: "lek. Joanna Lis",
        title: "Dermatolog",
        image: "/staff/joanna-lis.jpg",
        description: "Specjalizuje się w diagnostyce chorób skóry, prowadzi również zabiegi z zakresu dermatologii estetycznej."
    },
    {
        name: "mgr Paweł Dąbrowski",
        title: "Ratownik Medyczny",
        image: "/staff/pawel-dabrowski.jpg",
        description: "Pierwsza linia pomocy w stanach zagrożenia życia. Szybko reaguje i współpracuje z zespołami lekarskimi."
    }
];
function MedicalStaffPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "max-w-6xl mx-auto px-4 py-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
                className: "text-4xl font-bold text-blue-800 mb-10",
                initial: {
                    opacity: 0,
                    y: -20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 0.5
                },
                children: "Kadra Medyczna"
            }, void 0, false, {
                fileName: "[project]/src/app/kadramedyczna/page.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-8 ",
                children: staff.map((member, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition-transform duration-300",
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: true
                        },
                        transition: {
                            duration: 0.4,
                            delay: index * 0.1
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative w-full h-64",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: member.image,
                                    alt: member.name,
                                    fill: true,
                                    className: "object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/kadramedyczna/page.tsx",
                                    lineNumber: 111,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/kadramedyczna/page.tsx",
                                lineNumber: 110,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-semibold text-gray-900",
                                        children: member.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/kadramedyczna/page.tsx",
                                        lineNumber: 119,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-blue-700 font-medium mb-2",
                                        children: member.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/kadramedyczna/page.tsx",
                                        lineNumber: 120,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-700 text-sm",
                                        children: member.description
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/kadramedyczna/page.tsx",
                                        lineNumber: 121,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/kadramedyczna/page.tsx",
                                lineNumber: 118,
                                columnNumber: 13
                            }, this)
                        ]
                    }, member.name, true, {
                        fileName: "[project]/src/app/kadramedyczna/page.tsx",
                        lineNumber: 102,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/kadramedyczna/page.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/kadramedyczna/page.tsx",
        lineNumber: 90,
        columnNumber: 5
    }, this);
}
_c = MedicalStaffPage;
var _c;
__turbopack_context__.k.register(_c, "MedicalStaffPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_kadramedyczna_page_tsx_92174230._.js.map