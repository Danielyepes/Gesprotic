! function (a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof module && module.exports ? module.exports = a(require("jquery")) : a(jQuery)
}(function (a) {
    function b(a, b) {
        this.init.apply(this, arguments)
    }
    var c = a(window.document),
        d = 0,
        e = /\w\b/g,
        f = {
            13: "enter",
            27: "escape",
            40: "downArrow",
            38: "upArrow"
        };
    return a.extend(b.prototype, {
        init: function (c, e) {
            e = this.options = a.extend(!0, {}, b.defaults, e), this.$input = a(c), this.$el = e.wrapSelector instanceof a ? e.wrapSelector : this.$input.closest(e.wrapSelector), b.pickTo(e, this.$el.data(), ["url", "onItemSelect", "noResultsText", "inputIdName", "apiInputName"]), e.url = e.url || this.$el.attr("action"), this.ens = ".fastsearch" + ++d, this.itemSelector = b.selectorFromClass(e.itemClass), this.focusedItemSelector = b.selectorFromClass(e.focusedItemClass), this.events()
        },
        namespaceEvents: function (a) {
            var b = this.ens;
            return a.replace(e, function (a) {
                return a + b
            })
        },
        events: function () {
            var b = this,
                c = this.options;
            this.$input.on(this.namespaceEvents("keyup focus click"), function (a) {
                "enter" !== f[a.keyCode] && b.handleTyping()
            }).on(this.namespaceEvents("keydown"), function (a) {
                if ("enter" === f[a.keyCode] && c.preventSubmit && a.preventDefault(), b.hasResults && b.resultsOpened) switch (f[a.keyCode]) {
                    case "downArrow":
                        a.preventDefault(), b.navigateItem("down");
                        break;
                    case "upArrow":
                        a.preventDefault(), b.navigateItem("up");
                        break;
                    case "enter":
                        b.onEnter(a)
                }
            }), this.$el.on(this.namespaceEvents("click"), this.itemSelector, function (c) {
                c.preventDefault(), b.handleItemSelect(a(this))
            }), c.mouseEvents && this.$el.on(this.namespaceEvents("mouseleave"), this.itemSelector, function (b) {
                a(this).removeClass(c.focusedItemClass)
            }).on(this.namespaceEvents("mouseenter"), this.itemSelector, function (d) {
                b.$resultItems.removeClass(c.focusedItemClass), a(this).addClass(c.focusedItemClass)
            })
        },
        handleTyping: function () {
            var b = a.trim(this.$input.val()),
                c = this;
            b.length < this.options.minQueryLength ? this.hideResults() : b === this.query ? this.showResults() : (clearTimeout(this.keyupTimeout), this.keyupTimeout = setTimeout(function () {
                c.$el.addClass(c.options.loadingClass), c.query = b, c.getResults(function (a) {
                    c.showResults(c.storeResponse(a).generateResults(a))
                })
            }, this.options.typeTimeout))
        },
        getResults: function (b) {
            var c = this,
                d = this.options,
                e = this.$el.find("input, textarea, select").serializeArray();
            d.apiInputName && e.push({
                name: d.apiInputName,
                value: this.$input.val()
            }), a.get(d.url, e, function (a) {
                b(d.parseResponse ? d.parseResponse.call(c, a, c) : a)
            })
        },
        storeResponse: function (a) {
            return this.responseData = a, this.hasResults = 0 !== a.length, this
        },
        generateResults: function (b) {
            var c = a("<div>"),
                d = this.options;
            return d.template ? a(d.template(b, this)) : (0 === b.length ? c.html('<p class="' + d.noResultsClass + '">' + ("function" == typeof d.noResultsText ? d.noResultsText.call(this) : d.noResultsText) + "</p>") : "html" === this.options.responseType ? c.html(b) : this["generate" + (b[0][d.responseFormat.groupItems] ? "GroupedResults" : "SimpleResults")](b, c), c.children())
        },
        generateSimpleResults: function (b, c) {
            var d = this;
            this.itemModels = b, a.each(b, function (a, b) {
                c.append(d.generateItem(b))
            })
        },
        generateGroupedResults: function (b, c) {
            var d = this,
                e = this.options,
                f = e.responseFormat;
            this.itemModels = [], a.each(b, function (b, g) {
                var h = a('<div class="' + e.groupClass + '">').appendTo(c);
                g[f.groupCaption] && h.append('<h3 class="' + e.groupTitleClass + '">' + g[f.groupCaption] + "</h3>"), a.each(g.items, function (a, b) {
                    d.itemModels.push(b), h.append(d.generateItem(b))
                }), e.onGroupCreate && e.onGroupCreate.call(d, h, g, d)
            })
        },
        generateItem: function (b) {
            var c = this.options,
                d = c.responseFormat,
                e = b[d.url],
                f = b[d.html] || b[d.label],
                g = a("<" + (e ? "a" : "span") + ">").html(f).addClass(c.itemClass);
            return e && g.attr("href", e), c.onItemCreate && c.onItemCreate.call(this, g, b, this), g
        },
        showResults: function (b) {
            !b && this.resultsOpened || (this.$el.removeClass(this.options.loadingClass).addClass(this.options.resultsOpenedClass), this.options.flipOnBottom && this.checkDropdownPosition(), this.$resultsCont = this.$resultsCont || a("<div>").addClass(this.options.resultsContClass).appendTo(this.$el), b && (this.$resultsCont.html(b), this.$resultItems = this.$resultsCont.find(this.itemSelector), this.options.onResultsCreate && this.options.onResultsCreate.call(this, this.$resultsCont, this.responseData, this)), this.resultsOpened || (this.documentCancelEvents("on"), this.$input.trigger("openingResults")), this.options.focusFirstItem && this.$resultItems && this.$resultItems.length && this.navigateItem("down"), this.resultsOpened = !0)
        },
        checkDropdownPosition: function () {
            var a = this.options.flipOnBottom,
                b = "boolean" == typeof a && a ? 400 : a,
                d = this.$input.offset().top + b > c.height();
            this.$el.toggleClass(this.options.resultsFlippedClass, d)
        },
        documentCancelEvents: function (b, d) {
            var e = this;
            return "off" === b && this.closeEventsSetuped ? (c.off(this.ens), void(this.closeEventsSetuped = !1)) : void("on" !== b || this.closeEventsSetuped || (c.on(this.namespaceEvents("click keyup"), function (b) {
                ("escape" === f[b.keyCode] || !a(b.target).is(e.$el) && !a.contains(e.$el.get(0), b.target) && a.contains(document.documentElement, b.target)) && (d ? d.call(e) : e.hideResults())
            }), this.closeEventsSetuped = !0))
        },
        navigateItem: function (a) {
            var b = this.$resultItems.filter(this.focusedItemSelector),
                c = this.$resultItems.length - 1;
            if (0 === b.length) return void this.$resultItems.eq("up" === a ? c : 0).addClass(this.options.focusedItemClass);
            var d = this.$resultItems.index(b),
                e = "up" === a ? d - 1 : d + 1;
            e > c && (e = 0), e < 0 && (e = c), b.removeClass(this.options.focusedItemClass), this.$resultItems.eq(e).addClass(this.options.focusedItemClass)
        },
        navigateDown: function () {
            this.navigateItem("down")
        },
        navigateUp: function () {
            this.navigateItem("up")
        },
        onEnter: function (a) {
            var b = this.$resultItems.filter(this.focusedItemSelector);
            b.length && (a.preventDefault(), this.handleItemSelect(b))
        },
        handleItemSelect: function (a) {
            var b = this.options.onItemSelect,
                c = this.itemModels.length ? this.itemModels[this.$resultItems.index(a)] : {};
            this.$input.trigger("itemSelected"), "fillInput" === b ? this.fillInput(c) : "follow" === b ? window.location.href = a.attr("href") : "function" == typeof b && b.call(this, a, c, this)
        },
        fillInput: function (b) {
            var c = this.options,
                d = c.responseFormat;
            if (this.query = b[d.label], this.$input.val(b[d.label]).trigger("change"), c.fillInputId && b.id) {
                if (!this.$inputId) {
                    var e = c.inputIdName || this.$input.attr("name") + "_id";
                    this.$inputId = this.$el.find('input[name="' + e + '"]'), this.$inputId.length || (this.$inputId = a('<input type="hidden" name="' + e + '" />').appendTo(this.$el))
                }
                this.$inputId.val(b.id).trigger("change")
            }
            this.hideResults()
        },
        hideResults: function () {
            return this.resultsOpened && (this.resultsOpened = !1, this.$el.removeClass(this.options.resultsOpenedClass), this.$input.trigger("closingResults"), this.documentCancelEvents("off")), this
        },
        clear: function () {
            return this.hideResults(), this.$input.val("").trigger("change"), this
        },
        destroy: function () {
            c.off(this.ens), this.$input.off(this.ens), this.$el.off(this.ens).removeClass(this.options.resultsOpenedClass).removeClass(this.options.loadingClass), this.$resultsCont && (this.$resultsCont.remove(), delete this.$resultsCont), delete this.$el.data().fastsearch
        }
    }), a.extend(b, {
        pickTo: function (b, c, d) {
            return a.each(d, function (a, d) {
                b[d] = c && c[d] || b[d]
            }), b
        },
        selectorFromClass: function (a) {
            return "." + a.replace(/\s/g, ".")
        }
    }), b.defaults = {
        wrapSelector: "form",
        url: null,
        responseType: "JSON",
        preventSubmit: !1,
        resultsContClass: "fs_results",
        resultsOpenedClass: "fsr_opened",
        resultsFlippedClass: "fsr_flipped",
        groupClass: "fs_group",
        itemClass: "fs_result_item",
        groupTitleClass: "fs_group_title",
        loadingClass: "loading",
        noResultsClass: "fs_no_results",
        focusedItemClass: "focused",
        typeTimeout: 140,
        minQueryLength: 2,
        template: null,
        mouseEvents: !("ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0),
        focusFirstItem: !1,
        flipOnBottom: !1,
        responseFormat: {
            url: "url",
            html: "html",
            label: "label",
            groupCaption: "caption",
            groupItems: "items"
        },
        fillInputId: !0,
        inputIdName: null,
        apiInputName: null,
        noResultsText: "No results found",
        onItemSelect: "follow",
        parseResponse: null,
        onResultsCreate: null,
        onGroupCreate: null,
        onItemCreate: null
    }, a.fastsearch = b, a.fn.fastsearch = function (c) {
        return this.each(function () {
            a.data(this, "fastsearch") || a.data(this, "fastsearch", new b(this, c))
        })
    }, a
});
! function (a, b) {
    "function" == typeof define && define.amd ? define(["jquery", "fastsearch"], b) : "object" == typeof module && module.exports ? module.exports = b(require("jquery"), require("fastsearch")) : b(a.jQuery)
}(this, function (a) {
    function b(a, b) {
        this.init.apply(this, arguments)
    }

    function c(a) {
        this.init(a)
    }
    var d = a(document),
        e = 0,
        f = a.fastsearch,
        g = f.pickTo,
        h = f.selectorFromClass;
    return a.extend(b.prototype, {
        init: function (d, f) {
            this.$input = a(d), this.options = g(a.extend(!0, {}, b.defaults, f, {
                placeholder: this.$input.attr("placeholder")
            }), this.$input.data(), ["url", "loadOnce", "apiParam", "initialValue", "userOptionAllowed"]), this.ens = ".fastselect" + ++e, this.hasCustomLoader = this.$input.is("input"), this.isMultiple = !!this.$input.attr("multiple"), this.userOptionAllowed = this.hasCustomLoader && this.isMultiple && this.options.userOptionAllowed, this.optionsCollection = new c(g({
                multipleValues: this.isMultiple
            }, this.options, ["url", "loadOnce", "parseData", "matcher"])), this.setupDomElements(), this.setupFastsearch(), this.setupEvents()
        },
        setupDomElements: function () {
            this.$el = a("<div>").addClass(this.options.elementClass), this[this.isMultiple ? "setupMultipleElement" : "setupSingleElement"](function () {
                this.updateDomElements(), this.$controls.appendTo(this.$el), this.$el.insertAfter(this.$input), this.$input.detach().appendTo(this.$el)
            })
        },
        setupSingleElement: function (b) {
            var c = this.processInitialOptions(),
                d = c && c.length ? c[0].text : this.options.placeholder;
            this.$el.addClass(this.options.singleModeClass), this.$controls = a("<div>").addClass(this.options.controlsClass), this.$toggleBtn = a("<div>").addClass(this.options.toggleButtonClass).text(d).appendTo(this.$el), this.$queryInput = a("<input>").attr("placeholder", this.options.searchPlaceholder).addClass(this.options.queryInputClass).appendTo(this.$controls), b.call(this)
        },
        setupMultipleElement: function (b) {
            var c = this,
                d = c.options,
                e = this.processInitialOptions();
            this.$el.addClass(d.multipleModeClass), this.$controls = a("<div>").addClass(d.controlsClass), this.$queryInput = a("<input>").addClass(d.queryInputClass).appendTo(this.$controls), e && a.each(e, function (a, b) {
                c.addChoiceItem(b)
            }), b.call(this)
        },
        updateDomElements: function () {
            this.$el.toggleClass(this.options.noneSelectedClass, !this.optionsCollection.hasSelectedValues()), this.adjustQueryInputLayout()
        },
        processInitialOptions: function () {
            var b, c = this;
            return this.hasCustomLoader ? (b = this.options.initialValue, a.isPlainObject(b) && (b = [b])) : b = a.map(this.$input.find("option:selected").get(), function (b) {
                var c = a(b);
                return {
                    text: c.text(),
                    value: c.attr("value")
                }
            }), b && a.each(b, function (a, b) {
                c.optionsCollection.setSelected(b)
            }), b
        },
        addChoiceItem: function (b) {
            a('<div data-text="' + b.text + '" data-value="' + b.value + '" class="' + this.options.choiceItemClass + '">' + a("<div>").html(b.text).text() + '<button class="' + this.options.choiceRemoveClass + '" type="button">×</button></div>').insertBefore(this.$queryInput)
        },
        setupFastsearch: function () {
            var b = this,
                c = this.options,
                d = {};
            g(d, c, ["resultsContClass", "resultsOpenedClass", "resultsFlippedClass", "groupClass", "itemClass", "focusFirstItem", "groupTitleClass", "loadingClass", "noResultsClass", "noResultsText", "focusedItemClass", "flipOnBottom"]), this.fastsearch = new f(this.$queryInput.get(0), a.extend(d, {
                wrapSelector: this.isMultiple ? this.$el : this.$controls,
                minQueryLength: 0,
                typeTimeout: this.hasCustomLoader ? c.typeTimeout : 0,
                preventSubmit: !0,
                fillInputId: !1,
                responseFormat: {
                    label: "text",
                    groupCaption: "label"
                },
                onItemSelect: function (a, d, e) {
                    var f = c.maxItems;
                    b.isMultiple && f && b.optionsCollection.getValues().length > f - 1 ? c.onMaxItemsReached && c.onMaxItemsReached(this) : (b.setSelectedOption(d), b.writeToInput(), !b.isMultiple && b.hide(), c.clearQueryOnSelect && e.clear(), b.userOptionAllowed && d.isUserOption && (e.$resultsCont.remove(), delete e.$resultsCont, b.hide()), c.onItemSelect && c.onItemSelect.call(b, a, d, b, e))
                },
                onItemCreate: function (a, d) {
                    d.$item = a, d.selected && a.addClass(c.itemSelectedClass), b.userOptionAllowed && d.isUserOption && a.text(b.options.userOptionPrefix + a.text()).addClass(b.options.userOptionClass), c.onItemCreate && c.onItemCreate.call(b, a, d, b)
                }
            })), this.fastsearch.getResults = function () {
                b.userOptionAllowed && b.$queryInput.val().length > 1 && b.renderOptions(), b.getOptions(function () {
                    b.renderOptions(!0)
                })
            }
        },
        getOptions: function (b) {
            var c = this.options,
                d = {};
            if (this.hasCustomLoader) {
                var e = a.trim(this.$queryInput.val());
                e && c.apiParam && (d[c.apiParam] = e), this.optionsCollection.fetch(d, b)
            } else !this.optionsCollection.models && this.optionsCollection.reset(this.gleanSelectData(this.$input)), b()
        },
        namespaceEvents: function (a) {
            return f.prototype.namespaceEvents.call(this, a)
        },
        setupEvents: function () {
            var b = this,
                c = this.options;
            this.isMultiple ? (this.$el.on(this.namespaceEvents("click"), function (d) {
                a(d.target).is(h(c.controlsClass)) && b.$queryInput.focus()
            }), this.$queryInput.on(this.namespaceEvents("keyup"), function (a) {
                b.adjustQueryInputLayout(), b.show()
            }).on(this.namespaceEvents("focus"), function () {
                b.show()
            }), this.$el.on(this.namespaceEvents("click"), h(c.choiceRemoveClass), function (d) {
                var e = a(d.currentTarget).closest(h(c.choiceItemClass));
                b.removeSelectedOption({
                    value: e.attr("data-value"),
                    text: e.attr("data-text")
                }, e)
            })) : this.$el.on(this.namespaceEvents("click"), h(c.toggleButtonClass), function () {
                b.$el.hasClass(c.activeClass) ? b.hide() : b.show(!0)
            })
        },
        adjustQueryInputLayout: function () {
            if (this.isMultiple && this.$queryInput) {
                var b = this.$el.hasClass(this.options.noneSelectedClass);
                this.$queryInput.toggleClass(this.options.queryInputExpandedClass, b), b ? this.$queryInput.attr({
                    style: "",
                    placeholder: this.options.placeholder
                }) : (this.$fakeInput = this.$fakeInput || a("<span>").addClass(this.options.fakeInputClass), this.$fakeInput.text(this.$queryInput.val().replace(/\s/g, "&nbsp;")), this.$queryInput.removeAttr("placeholder").css("width", this.$fakeInput.insertAfter(this.$queryInput).width() + 20), this.$fakeInput.detach())
            }
        },
        show: function (a) {
            this.$el.addClass(this.options.activeClass), a ? this.$queryInput.focus() : this.fastsearch.handleTyping(), this.documentCancelEvents("on")
        },
        hide: function () {
            this.$el.removeClass(this.options.activeClass), this.documentCancelEvents("off")
        },
        documentCancelEvents: function (a) {
            f.prototype.documentCancelEvents.call(this, a, this.hide)
        },
        setSelectedOption: function (a) {
            if (!this.optionsCollection.isSelected(a.value)) {
                this.optionsCollection.setSelected(a);
                var b = this.optionsCollection.findWhere(function (b) {
                    return b.value === a.value
                });
                this.isMultiple ? this.$controls && this.addChoiceItem(a) : (this.fastsearch && this.fastsearch.$resultItems.removeClass(this.options.itemSelectedClass), this.$toggleBtn && this.$toggleBtn.text(a.text)), b && b.$item.addClass(this.options.itemSelectedClass), this.updateDomElements()
            }
        },
        removeSelectedOption: function (a, b) {
            var c = this.optionsCollection.removeSelected(a);
            c && c.$item && c.$item.removeClass(this.options.itemSelectedClass), b ? b.remove() : this.$el.find(h(this.options.choiceItemClass) + '[data-value="' + a.value + '"]').remove(), this.updateDomElements(), this.writeToInput()
        },
        writeToInput: function () {
            var a = this.optionsCollection.getValues(),
                b = this.options.valueDelimiter,
                c = this.isMultiple ? this.hasCustomLoader ? a.join(b) : a : a[0];
            this.$input.val(c).trigger("change")
        },
        renderOptions: function (a) {
            var b, c = this.$queryInput.val();
            if (b = this.optionsCollection.models ? (a ? this.optionsCollection.filter(c) : this.optionsCollection.models).slice(0) : [], this.userOptionAllowed) {
                var d = this.optionsCollection.models && this.optionsCollection.findWhere(function (a) {
                    return a.value === c
                });
                c && !d && b.unshift({
                    text: c,
                    value: c,
                    isUserOption: !0
                })
            }
            this.fastsearch.showResults(this.fastsearch.storeResponse(b).generateResults(b))
        },
        gleanSelectData: function (b) {
            var c = this,
                d = b.children();
            return d.eq(0).is("optgroup") ? a.map(d.get(), function (b) {
                var d = a(b);
                return {
                    label: d.attr("label"),
                    items: c.gleanOptionsData(d.children())
                }
            }) : this.gleanOptionsData(d)
        },
        gleanOptionsData: function (b) {
            return a.map(b.get(), function (b) {
                var c = a(b);
                return {
                    text: c.text(),
                    value: c.attr("value"),
                    selected: c.is(":selected")
                }
            })
        },
        destroy: function () {
            d.off(this.ens), this.fastsearch.destroy(), this.$input.off(this.ens).detach().insertAfter(this.$el), this.$el.off(this.ens).remove(), this.$input.data() && delete this.$input.data().fastselect
        }
    }), a.extend(c.prototype, {
        defaults: {
            loadOnce: !1,
            url: null,
            parseData: null,
            multipleValues: !1,
            matcher: function (a, b) {
                return a.toLowerCase().indexOf(b.toLowerCase()) > -1
            }
        },
        init: function (b) {
            this.options = a.extend({}, this.defaults, b), this.selectedValues = {}
        },
        fetch: function (a, b) {
            var c = this,
                d = function () {
                    c.applySelectedValues(b)
                };
            this.options.loadOnce ? (this.fetchDeferred = this.fetchDeferred || this.load(a), this.fetchDeferred.done(d)) : this.load(a, d)
        },
        reset: function (a) {
            this.models = this.options.parseData ? this.options.parseData(a) : a, this.applySelectedValues()
        },
        applySelectedValues: function (a) {
            this.each(function (a) {
                this.options.multipleValues && a.selected ? this.selectedValues[a.value] = !0 : a.selected = !!this.selectedValues[a.value]
            }), a && a.call(this)
        },
        load: function (b, c) {
            var d = this,
                e = this.options;
            return a.get(e.url, b, function (a) {
                d.models = e.parseData ? e.parseData(a) : a, c && c.call(d)
            })
        },
        setSelected: function (a) {
            this.options.multipleValues || (this.selectedValues = {}), this.selectedValues[a.value] = !0, this.applySelectedValues()
        },
        removeSelected: function (a) {
            var b = this.findWhere(function (b) {
                return a.value === b.value
            });
            return b && (b.selected = !1), delete this.selectedValues[a.value], b
        },
        isSelected: function (a) {
            return !!this.selectedValues[a]
        },
        hasSelectedValues: function () {
            return this.getValues().length > 0
        },
        each: function (b) {
            var c = this;
            this.models && a.each(this.models, function (d, e) {
                e.items ? a.each(e.items, function (a, d) {
                    b.call(c, d)
                }) : b.call(c, e)
            })
        },
        where: function (a) {
            var b = [];
            return this.each(function (c) {
                a(c) && b.push(c)
            }), b
        },
        findWhere: function (a) {
            var b = this.where(a);
            return b.length ? b[0] : void 0
        },
        filter: function (b) {
            function c(a) {
                return d.options.matcher(a.text, b) ? a : null
            }
            var d = this;
            return b && 0 !== b.length ? a.map(this.models, function (b) {
                if (b.items) {
                    var d = a.map(b.items, c);
                    return d.length ? {
                        label: b.label,
                        items: d
                    } : null
                }
                return c(b)
            }) : this.models
        },
        getValues: function () {
            return a.map(this.selectedValues, function (a, b) {
                return a ? b : null
            })
        }
    }), b.defaults = {
        elementClass: "fstElement",
        singleModeClass: "fstSingleMode",
        noneSelectedClass: "fstNoneSelected",
        multipleModeClass: "fstMultipleMode",
        queryInputClass: "fstQueryInput",
        queryInputExpandedClass: "fstQueryInputExpanded",
        fakeInputClass: "fstFakeInput",
        controlsClass: "fstControls",
        toggleButtonClass: "fstToggleBtn",
        activeClass: "fstActive",
        itemSelectedClass: "fstSelected",
        choiceItemClass: "fstChoiceItem",
        choiceRemoveClass: "fstChoiceRemove",
        userOptionClass: "fstUserOption",
        resultsContClass: "fstResults",
        resultsOpenedClass: "fstResultsOpened",
        resultsFlippedClass: "fstResultsFilpped",
        groupClass: "fstGroup",
        itemClass: "fstResultItem",
        groupTitleClass: "fstGroupTitle",
        loadingClass: "fstLoading",
        noResultsClass: "fstNoResults",
        focusedItemClass: "fstFocused",
        matcher: null,
        url: null,
        loadOnce: !1,
        apiParam: "query",
        initialValue: null,
        clearQueryOnSelect: !0,
        minQueryLength: 1,
        focusFirstItem: !1,
        flipOnBottom: !0,
        typeTimeout: 150,
        userOptionAllowed: !1,
        valueDelimiter: ",",
        maxItems: null,
        parseData: null,
        onItemSelect: null,
        onItemCreate: null,
        onMaxItemsReached: null,
        placeholder: "Choose option",
        searchPlaceholder: "Search options",
        noResultsText: "No results",
        userOptionPrefix: "Add "
    }, a.Fastselect = b, a.Fastselect.OptionsCollection = c, a.fn.fastselect = function (c) {
        return this.each(function () {
            a.data(this, "fastselect") || a.data(this, "fastselect", new b(this, c))
        })
    }, a
});