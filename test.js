/* jquery.stylize.js - stylize plugin
 *
 *  Dependencies:	xBreadcrumbs (Extended Breadcrums) jQuery Plugin (for swlFilter plugin)
 *					jquery.swlFilter.js - for drill down filter option
 *					jquery.snwlCtxDispatch - handler for swlEvent* classes
 *
 */

;
(function($) { // allow custom jQuery alias

    var bw = new lib_bwcheck();

    $.fn.stylize = function(inOpts) { // claim a single name in jQuery namespace
        var lgcyFtr, // footer in legacy layout
            clonedContent, // for special handling of 'data' attached to .swlTblContainer
            tabDiv, // tab container
            ftrDiv, // div to hold buttons, summaries, etc.
            htmlStr;
        var switchSkin; // flag to denote switching skin from nextGen to classic
        var tabCtx = {
            bodyId: $(this).attr('id'),
            name: $(this).attr('name'),
            status: "success"
        };
        var jqStr = '#' + tabCtx.bodyId;
        var tblCtrl = null;
        var that = this;
        var options = inOpts || {};
        var opts = $.extend({}, $.fn.stylize.defaults, options);
        var yDelta = parseInt($('body').css('margin-top')) + parseInt($('body').css('margin-bottom')) +
            parseInt($('body').css('padding-top')) + parseInt($('body').css('padding-bottom'));
        var xDelta = parseInt($('body').css('margin-left')) + parseInt($('body').css('margin-right')) +
            parseInt($('body').css('padding-left')) + parseInt($('body').css('padding-right'));

        if (opts.skin === 'retro') {
            tabCtx.headerId = tabCtx.bodyId + "Header";
        } else {
            tabCtx.headerId = tabCtx.bodyId + "_tabheader";
        }

        function onTabClick(tab) {
            var id = tab.id.substring(0, tab.id.indexOf("_trigger")),
                skin = $('.pageSetting img').data("skin");

            skin = skin ? skin : opts.skin;

            $('#' + id).parents('.swlContentContainer').find('.swlTabContainer').each(
                function(i, tabCon) {
                    if (tabCon.id) {
                        if (tabCon.id === id) {
                            $("#" + tabCon.id).css('display', 'block');
                            $("#" + tabCon.id + "_pagination").css('display', 'block');
                            $("#" + tabCon.id + "_tabheader").css('display', 'block');
                            $("#" + tabCon.id + "_footer").css('display', 'block');
                            $("#" + tabCon.id + "_tblSummary").css('display', 'block');
                            $("#" + tabCon.id + "_trigger").removeClass('tabOff').addClass('tabOn');
                            if (!opts.useSwlTable && !$.browser.mozilla) {
                                $("#" + tabCon.id + "_tblHd").css('display', 'table');
                                $("#" + tabCon.id + "_tblFoot").css('display', 'table');
                            }
                        } else {
                            $("#" + tabCon.id).css('display', 'none');
                            $("#" + tabCon.id + "_pagination").css('display', 'none');
                            $("#" + tabCon.id + "_tabheader").css('display', 'none');
                            $("#" + tabCon.id + "_footer").css('display', 'none');
                            $("#" + tabCon.id + "_tblSummary").css('display', 'none');
                            $("#" + tabCon.id + "_trigger").removeClass('tabOn').addClass('tabOff');
                            if (!opts.useSwlTable && !$.browser.mozilla) {
                                $("#" + tabCon.id + "_tblHd").css('display', 'none');
                                $("#" + tabCon.id + "_tblFoot").css('display', 'none');
                            }
                        }
                    }
                });

            /* no need do resize here, as it would be performed in stylize->skin.
             * Although !(!==) is not straight forward here, it just wants to make
             * the false case of that in "skin" action. */
            if (!(opts.skin !== "retro")) {
                resize(id);
            }

            //setCookie(scrlTblTabCookie, id);
            setCookie(opts.activeTabCookie, id);
            $('#' + id).parents('.swlContentContainer').data('curTabId', id);
            $('.swlContentContainer').stylize({
                action: 'skin',
                skin: skin
            });
        }

        function resize(id) {
            var jqTabCon = $('#' + id);
            if (opts.skin !== 'retro' && jqTabCon.length > 0) {
                var jqContainer = jqTabCon.parents('.swlContentContainer');
                var jqContent = jqTabCon.parents('.swlContent');
                var jqContentHdr = jqContent.find('.swlContentHdr'); // contains content _tabheaders - within content, sibling to tab/tbl contents
                var jqTabHdr = $('#' + id + '_tabheader'); // within the content header - swapped with content when tab selection changes
                var jqTblCon = jqTabCon.hasClass('swlTblContainer') ? jqTabCon : jqTabCon.find('.swlTblContainer'); // should match tab container
                var jqTable = jqTabCon.find('.swlTable');
                var jqTbody = jqTable.find('tbody');
                var jqThead = $('#' + id + '_tblHd');
                var jqTfoot = $('#' + id + '_tblFoot');
                var tblCtrl = jqTabCon.data('tblCtrl');
                var hdrHeight = jqTabHdr.length === 0 ? 10 : parseInt(opts.contentHdrHeight, 10);
                var cssHdrHeight = hdrHeight + "px";
                var cssContentHdr = { 'min-height': cssHdrHeight, 'height': cssHdrHeight, 'max-height': cssHdrHeight };
                var deltaHt = 0;
                var tabConHeight;
                var tfootHeight = jqTfoot.length > 0 ? jqTfoot.height() : 0;
                var tdWidths = [];
                var theadWidth;
                var paddingHt = 0;

                $('body').height($(window).height() - yDelta);
                $('body').width($(window).width() - xDelta);

                if (opts.stretchHeight) {
                    deltaHt += parseInt(jqContainer.css('margin-bottom'), 10);
                    deltaHt += parseInt(jqContainer.css('border-top'), 10);
                    deltaHt += parseInt(jqContainer.css('border-bottom'), 10);
                    jqContainer.siblings(':visible:not(span#ttipId)').each(function() {
                        var $elem = $(this);
                        if ($elem.hasClass('pageSetting')) {
                            return true;
                        }
                        if ($elem.hasClass('blockUI')) {
                            return true;
                        }
                        if ($elem.hasClass('swlHeader') && !opts.showTabs) {
                            return true;
                        }
                        if ($elem.attr('id') === 'pageHeader') { // this is sometimes a sibling and sometimes a level higher
                            return true; // but is always present so we will add explictly below
                        }
                        deltaHt += $elem.height();
                        if ($elem.attr('id') === 'drillDownDiv') { // also sometimes a sibling and sometimes a level higher
                            return true; // presence determined by drilldown option - handle explictly below
                        }
                        cssVal = parseInt($elem.css('margin-top'), 10);
                        if (!isNaN(cssVal)) {
                            deltaHt += cssVal;
                        }
                        cssVal = parseInt($elem.css('margin-bottom'), 10);
                        if (!isNaN(cssVal)) {
                            deltaHt += cssVal;
                        }
                        cssVal = parseInt($elem.css('padding-top'), 10);
                        if (!isNaN(cssVal)) {
                            deltaHt += cssVal;
                        }
                        cssVal = parseInt($elem.css('padding-bottom'), 10);
                        if (!isNaN(cssVal)) {
                            deltaHt += cssVal;
                        }
                    });
                    deltaHt += $('#pageHeader').height();
                    if (opts.drillDown) {
                        deltaHt += $('#drillDownFilterDiv').height();
                    }
                    if ($('#pageHeader').siblings('#hdrLineWrapper').length) {
                        deltaHt += $('#hdrLineWrapper').height();
                        deltaHt += parseInt($('.swlHdrLineDark').css('margin-top'), 10);
                    }
                    opts.height = $(window).height() - (yDelta + deltaHt);
                    jqContainer.height(opts.height);

                    paddingHt = 0;
                    jqContent.siblings(':visible').each(function() {
                        var $elem = $(this);
                        paddingHt += $elem.height();
                        cssVal = parseInt($elem.css('margin-top'), 10);
                        if (!isNaN(cssVal)) {
                            paddingHt += cssVal;
                        }
                        cssVal = parseInt($elem.css('margin-bottom'), 10);
                        if (!isNaN(cssVal)) {
                            paddingHt += cssVal;
                        }
                        cssVal = parseInt($elem.css('padding-top'), 10);
                        if (!isNaN(cssVal)) {
                            paddingHt += cssVal;
                        }
                        cssVal = parseInt($elem.css('padding-bottom'), 10);
                        if (!isNaN(cssVal)) {
                            paddingHt += cssVal;
                        }
                    });

                    cssVal = parseInt(jqContent.css('padding-top'), 10);
                    if (!isNaN(cssVal)) {
                        paddingHt += cssVal;
                    }
                    cssVal = parseInt(jqContent.css('padding-bottom'), 10);
                    if (!isNaN(cssVal)) {
                        paddingHt += cssVal;
                    }
                    cssVal = parseInt($('.trc').css('padding-bottom'), 10);
                    if (!isNaN(cssVal)) {
                        paddingHt += cssVal;
                    }
                    jqContent.height(jqContainer.height() - paddingHt);
                }

                cssContentHdr.visibility = jqTabHdr.length === 0 ? "hidden" : "visible";
                jqContentHdr.css(cssContentHdr);
                if (opts.folderBar) {
                    jqContentHdr.css("padding-top", "10px");
                }

                // adjust tab container height - less content padding and status padding
                paddingHt = 0;
                cssVal = parseInt(jqContent.css('padding-top'), 10);
                if (!isNaN(cssVal)) {
                    paddingHt += cssVal;
                }
                cssVal = parseInt(jqContent.css('padding-bottom'), 10);
                if (!isNaN(cssVal)) {
                    paddingHt += cssVal;
                }
                jqTabCon.siblings(':visible').each(function() {
                    var $elem = $(this);
                    if ($elem.attr('id') === jqTabCon.filter(':visible').attr('id')) {
                        return 1;
                    }
                    paddingHt += $elem.height();
                    cssVal = parseInt($elem.css('padding-top'), 10);
                    if (!isNaN(cssVal)) {
                        paddingHt += cssVal;
                    }
                    cssVal = parseInt($elem.css('padding-bottom'), 10);
                    if (!isNaN(cssVal)) {
                        paddingHt += cssVal;
                    }
                    cssVal = parseInt($elem.css('margin-top'), 10);
                    if (!isNaN(cssVal)) {
                        paddingHt += cssVal;
                    }
                    cssVal = parseInt($elem.css('margin-bottom'), 10);
                    if (!isNaN(cssVal)) {
                        paddingHt += cssVal;
                    }
                });
                jqTabCon.height(jqContent.height() - paddingHt);

                if (opts.stretchHeight) {
                    if ($(that).swlTable) {
                        $(that).swlTable.prototype.adjustHeight(id);
                    }
                }

                // adjust tbody height
                if (jqTbody.length > 0) {
                    if (opts.useSwlTable || !$.browser.mozilla) {

                        if (jqThead.length === 0) {
                            jqThead = jqTable.find('thead');
                        }
                        if (jqTfoot.length === 0) {
                            jqTfoot = jqTable.find('tfoot');
                        }

                        if (jqThead.length > 0) {
                            if (jqTblCon.length > 0) {
                                jqTblCon.width(jqTabCon.width());
                            }
                            tabConHeight = jqTabCon.height() - jqThead.height() - tfootHeight;
                            jqTabCon.height(tabConHeight);
                            if (jqTable.height() > jqTabCon.height()) { // will scroll
                                jqTable.width(jqTabCon.width() - 20);
                            } else {
                                jqTable.width(jqTabCon.width());
                            }
                            theadWidth = jqTable.width();
                            if (theadWidth) {
                                jqThead.width(theadWidth);
                                if (jqTfoot.length > 0) {
                                    jqTfoot.width(theadWidth);
                                }
                                jqThead.find('thead').each(function() {
                                    this.width = theadWidth;
                                });
                                jqThead.find('.swlTblHdrRow').each(function() {
                                    this.width = theadWidth;
                                });

                                jqContent.find('#' + id + '_tblHd td').each(function(i) {
                                    if (this.width.indexOf('%') !== -1) {
                                        this.width = (this.width.substring(0, this.width.indexOf('%')) * theadWidth) / 100;
                                    } else if (tblCtrl.colHdrs[i].width.indexOf('%') !== -1) {
                                        this.width = (tblCtrl.colHdrs[i].width.substring(0, tblCtrl.colHdrs[i].width.indexOf('%')) * theadWidth) / 100;
                                    }
                                    tdWidths[i] = Math.round(this.width);
                                });
                                if (tdWidths.length > 0) {
                                    jqTbody.find('tr').each(function() {
                                        $(this).find('td').each(function(i) {
                                            this.width = tdWidths[i];
                                        });
                                        return false;
                                    });
                                    if (jqContent.find('#' + id + '_tblFoot').length) {
                                        jqContent.find('#' + id + '_tblFoot td').each(function(i) {
                                            this.width = tdWidths[i];
                                        });
                                        return false;
                                    }
                                }
                            }
                        }
                        // HACK-ALERT (Jim Please review)
                        // Need to add this to fix issue in FF where rows are rendered thick in height when there are only a handful (1-3 entries)
                        jqTbody.height("auto");
                    } else {
                        jqTbody.height(jqTabCon.height() - jqTable.find('thead').height() - tfootHeight);
                        if (jqTabCon.find('.swlTable').width() > jqTabCon.width()) {
                            jqTbody.height(jqTbody.height() - 16); // allowance for horizontal scrollbar
                        }
                    }
                }

                if ($('#drillDownDiv').length > 0) {
                    $('#drillDownDiv').width($('body').width() - xDelta); // less body padding left/right and body margin left/right
                    if (opts.noFilterControl) {
                        $('#drillDownDiv').css('padding-right', 0);
                    }
                    $('#drillDownFilterDiv').width($('#drillDownDiv').width() - (opts.noFilterControl ? 0 :
                        ($('#filterSelectDiv').width() + parseInt($('#filterSelectDiv').css('margin-left')) +
                            parseInt($('#drillDownDiv').css('padding-left')) + parseInt($('#drillDownDiv').css('padding-right')) + $('#filterControlBtns').width())));
                    $('#filterViewDiv').width($('#drillDownFilterDiv').width() - (opts.noFilterControl ?
                        $('#filterEnableDiv').width() + parseInt($('#drillDownDiv').css('padding-left'), 10) :
                        $('#filterEnableDiv').width()));
                }

            }
            return true;
        }

        function getTabFooter() {
            return $(jqStr + "_footer.swlTabFooter");
        }

        function onKeyPress(evt) {
            var key;
            var ctrl;
            var e = evt || event;

            try {
                key = e.which || e.keyCode;
                if (key === undefined) {
                    throw -1;
                }
            } catch (err) {
                alert("neither e.keyCode nor e.which is available");
                key = err;
            } finally {
                ctrl = e.target || e.srcElement;
                if ($.browser.safari && ctrl.nodeType == 3) { // Safari bug
                    ctrl = ctrl.parentNode;
                }
                // on errors, color set to red, reset here - todo: use classes
                $(ctrl).css('color', 'black');
                if (key == 13) {
                    $(ctrl).next().click();
                }
            }
        }

        function addTopBar() {
            htmlStr = '<div id="topBarDiv" style="clear:both;">';
            htmlStr += '<div id="topBarLoc0" class="topBar0"></div>';
            htmlStr += '<div id="topBarLoc1" class="topBar1"></div>';
            htmlStr += '<div id="topBarLoc2" class="topBar2"></div>';
            htmlStr += '<div id="topBarLoc3" class="topBar3"></div></div>';

            $('#pageHeader').after(htmlStr);
        }

        function addDrillDown() {
            if ($('#topBarDiv').length > 0) {
                $('#topBarDiv').swlFilter().init();
            } else {
                $('#pageHeader').swlFilter().init();
            }
        }

        function setTabHeader(contentHdr, tabHdrId) {
            htmlStr = "";
            if (opts.skin !== 'retro') {
                if ($('#' + tabHdrId).length === 0) {
                    htmlStr = '<div id="' + tabHdrId + '">';
                }
            }
            if (opts.folderBar === false) {
                htmlStr += '<div class="swlTableFilter swlTabHeader"></div>';
                htmlStr += '<div class="swlTableSearch swlTabHeader"></div>';
                htmlStr += '<span class="swlRefresh"></span>';
                htmlStr += '<span class="swlInfo"></span>';
            }
            if (opts.skin !== 'retro') {
                htmlStr += '</div>';
            }
            if (htmlStr.length > 0) {
                contentHdr.append(htmlStr);
            }
        }

        function addFilter(evt, ndx) {
            var fName = "",
                fStr = "";
            var postData = {};
            var ctrl;
            var e = evt || event;
            ctrl = e.target || e.srcElement;
            if ($.browser.safari && ctrl.nodeType == 3) { // Safari bug
                ctrl = ctrl.parentNode;
            }
            if (ctrl.id === "filterDelete") {
                fName = $(ctrl).parent().find('#filterName').val();
                postData = { "filterDisplayName_-3": fName };
            } else {
                fName = $(ctrl).parents('.swlPanelRow').siblings().find('#filterName').val();
                fStr = $(ctrl).parents('.swlPanelRow').siblings().find('#filterAnd').val();
                // ndx greater than 0 indicates edit of existing filter (_-1 requests add, _-2 requests modify)
                if (ndx > 0) {
                    postData = {
                        "filterDisplayName_-2": fName,
                        "filterDisplayName_-1": fName,
                        'filterString_-1': fStr
                    };
                } else {
                    postData = { "filterDisplayName_-1": fName, 'filterString_-1': fStr };
                }
            }
            $.ajax({
                type: "POST",
                url: ctrl.ownerDocument.URL.substring(0, ctrl.ownerDocument.URL.lastIndexOf("/")) + "/main.cgi",
                cache: false,
                data: postData,
                dataType: 'json',
                global: false,
                success: function(data, textStatus) {
                    var cssColor = data.status.indexOf("Error") === -1 ? "blue" : "red";
                    var fStatus = null;
                    if (ctrl.id === "filterDelete") {
                        fStatus = $(ctrl).parent().siblings().find('#filterStatus');
                    } else {
                        fStatus = $(ctrl).parents('.swlPanelRow').find('#filterStatus');
                    }
                    if (fStatus !== null && fStatus !== undefined) {
                        fStatus.html("Status: " + data.status).css({ 'color': cssColor });
                    }
                    fetchFilterList();
                    if (ctrl.id === "filterDelete") {
                        $(ctrl).parent().siblings().find('#filterClose').click();
                    }
                },
                error: function(xhr, textStatus, errThrown) {
                    var fStatus = null;
                    if (ctrl.id === "filterDelete") {
                        fStatus = $(ctrl).parent().siblings().find('#filterStatus');
                    } else {
                        fStatus = $(ctrl).parents('.swlPanelRow').find('#filterStatus');
                    }
                    if (fStatus !== null && fStatus !== undefined) {
                        fStatus.html("Status: " + textStatus).css({ 'color': 'red' });
                    }
                }
            });
        }

        function setFilterList() {
            var filterList = $('.swlContentContainer').data('filterList');
            $('.swlTableFilter > select').each(function() {
                var htmlStr = "";
                var filterData = $(this).data('filterData');
                if (filterData === undefined || filterData.callerDefined === false) {
                    htmlStr += '<option value = "0" >Add Filter</option>';
                    for (i = 0; i < filterList.length; i++) {
                        htmlStr += '<option value="' + (i + 1) + '">';
                        htmlStr += filterList[i].filterName;
                        htmlStr += '</option>';
                    }
                    $(this).html(htmlStr);
                }
            });
        }

        function fetchFilterList() {
            $.ajax({
                type: "GET",
                url: window.location.href.substring(0, window.location.href.lastIndexOf("/")) + "/getJsonData.json",
                cache: false,
                data: {
                    'dataSet': 'groupFilter'
                },
                dataType: 'json',
                global: false,
                success: function(data, textStatus) {
                    if (data.status === "success") {
                        $(this).offsetParent().find('.swlContentContainer').data('filterList', data.groupFilter);
                        setFilterList();
                    }
                },
                error: function(xhr, textStatus, errThrown) {
                    var cssColor = textStatus.indexOf("error") === -1 ? "blue" : "red";
                }
            });
        }

        function filterCb(evt) {
            var ndx = $(evt.target).parent().find('select')[0].selectedIndex;
            var fData = {
                filterName: "",
                filterString: ""
            };
            if (ndx > 0) {
                $.extend(fData, $(this).parents('.swlTableFilter').find('select').data('filterData'));
            }
            var htmlStr = '<div>';
            htmlStr += '<div class="swlPanelHeader"><span>';
            if (ndx > 0) {
                htmlStr += 'Edit Filter';
            } else {
                htmlStr += 'Add Filter';
            }
            htmlStr += '</span></div>';
            htmlStr += '<div class="swlPanelRow"><span class="swlPopupLeft">Filter Name:</span>';
            htmlStr += '<input class="swlPopupRight" type="text" id="filterName" maxlength="32" ';
            htmlStr += 'value="' + fData.filterName + '" />';
            if (ndx > 0) {
                htmlStr += '<img id="filterDelete" src="trash.gif" alt="" />';
            }
            htmlStr += '</div>';
            htmlStr += '<div class="swlPanelRow"><span class="swlPopupLeft">Create a filter containing:</span></div>';
            htmlStr += '<div class="swlPanelRow"><span class="swlPopupLeft">All of these words:</span>';
            htmlStr += '<input class="swlPopupRight" type="text" id="filterAnd" maxlength="32"';
            htmlStr += 'value="' + fData.filterString + '" /></div>';
            htmlStr += '<div class="swlPanelRow"><span class="swlPopupLeft">One or more of these words:</span>';
            htmlStr += '<input class="swlPopupRight" type="text" id="filterOr" maxlength="32"/></div>';
            htmlStr += '<div class="swlPanelRow"><span class="swlPopupLeft">Excluding these words:</span>';
            htmlStr += '<input class="swlPopupRight" type="text" id="filterNot" maxlength="32"/></div>';
            htmlStr += '<div class="swlPanelRow"><span id="filterStatus"></span>';
            htmlStr += '<span class="swlPanelButtons">';
            htmlStr += '<input type="button" class="button swlRoundedCorner" id="filterSave" value="Save" />';
            htmlStr += '<input type="button" class="button swlRoundedCorner" id="filterClose" value="Close" />';
            htmlStr += '</span></div></div>';

            if ($.browser.mozilla && $.browser.version.substr(0, 3) === '1.9' &&
                $(navigator)[0].platform.indexOf('Linux') !== -1) {
                $.blockUI.defaults.applyPlatformOpacityRules = false;
                $.blockUI.defaults.fadeIn = 0;
                $.blockUI.defaults.fadeOut = 0;
            }

            if (opts.multiFrame) {
                if (getFrame('outlookFrame') !== null) {
                    getFrame('outlookFrame').blockOutlookView('0.2');
                }
            }
            $.blockUI({
                message: htmlStr,
                css: {
                    'min-width': '450px',
                    width: '450px',
                    color: '#676D7F',
                    cursor: 'default',
                    top: evt.clientY,
                    left: evt.clientX
                },
                overlayCSS: { backgroundColor: 'white', opacity: '0.6' }
            });
            $('#filterDelete').unbind('click').bind('click', { 'index': ndx }, function(event) {
                addFilter(event, event.data['index']);
                ndx = 0;
                $('#filterClose').click();
            });
            $('#filterSave').unbind('click').bind('click', { 'index': ndx }, function(event) {
                $('#filterStatus').empty();
                addFilter(event, event.data['index']);
                if (event.data['index'] > 0) {
                    $('#filterClose').click();
                }
            });
            $('#filterClose').unbind('click').bind('click', { 'multiFrame': opts.multiFrame }, function(event) {
                if (event.data['multiFrame']) {
                    if (getFrame('outlookFrame') !== null) {
                        getFrame('outlookFrame').unblockOutlookView();
                    }
                }
                $.unblockUI();
            });
            $('#filterStatus').css({ 'float': 'left', 'margin': '10px 0 0 20px' });
        }

        this.setVisibilityToggle = function() {
            $(jqStr + '_pagination').append('<span id="divVisToggle" class="rtSpan swlMarginL20"><img src="move_up2.gif" alt=""></span>');
            $('#divVisToggle').click(function() {
                var toggleImg = $(this).find('img');
                if ($(toggleImg).attr('src') === "move_up2.gif") {
                    $(toggleImg).attr('src', 'move_down2.gif');
                    $(jqStr).hide();
                    if ($.browser.mozilla === false) {
                        $(jqStr + '_tblHd').hide();
                    }
                    $(jqStr + '_footer').hide();
                } else {
                    $(toggleImg).attr('src', 'move_up2.gif');
                    $(jqStr).show();
                    if ($.browser.mozilla === false) {
                        $(jqStr + '_tblHd').show();
                    }
                    $(jqStr + '_footer').show();
                }
            });
        };

        this.togglePanelDependent = function(cbox) {
            var divToggle = $(cbox).parents(".swlPanelRow").siblings(".swlPanelToggle").eq(0);
            if (cbox.checked) {
                divToggle.find("input").each(function() {
                    $(this).removeAttr("disabled");
                });
                divToggle.find("select").each(function() {
                    $(this).removeAttr("disabled");
                });
            } else {
                divToggle.find("input").each(function() {
                    $(this).attr("disabled", "disabled");
                });
                divToggle.find("select").each(function() {
                    $(this).attr("disabled", "disabled");
                });
            }
        };
        this.togglePanelInput = function(cbox) {
            var divToggle = $(cbox).parents(".swlPanelRow").next(".swlPanelToggle").eq(0);
            if (cbox.checked) {
                divToggle.find("input").each(function() {
                    $(this).removeAttr("disabled");
                });
            } else {
                divToggle.find("input").each(function() {
                    $(this).attr("disabled", "disabled");
                });
            }
        };
        this.togglePanelSelect = function(cbox) {
            var divToggle = $(cbox).parents(".swlPanelRow").next(".swlPanelToggle").eq(0);
            if (cbox.checked) {
                divToggle.find("select").each(function() {
                    $(this).removeAttr("disabled");
                });
            } else {
                divToggle.find("select").each(function() {
                    $(this).attr("disabled", "disabled");
                });
            }
        };

        this.setStatusMsg = function(statusCtx) {
            var jqElem = $(this);
            var jqStatus = jqElem.siblings('.swlStatus');
            var htmlStr = '<img id="statusIcon" alt="" src="alert-';
            if (statusCtx === undefined || statusCtx === null ||
                statusCtx.message === undefined || statusCtx.message === null ||
                statusCtx.message.length === 0) {
                if (jqStatus.length > 0) {
                    jqStatus.html('');
                }
                return this;
            }
            if (jqStatus.length === 0) {
                if (jqElem.parents('.swlContent').length > 0) {
                    jqStatus = jqElem.parents('.swlContent').find('.swlStatus');
                }
            }
            if (jqStatus.length > 0) {
                htmlStr += statusCtx.status === "error" ? "red" : statusCtx.status === "success" ? "green" : "yellow";
                htmlStr += '.png"/><span';
                if (statusCtx.status === "success") {
                    htmlStr += ' class="swlStatusSuccess"';
                } else if (statusCtx.status === "error") {
                    htmlStr += ' class="swlStatusError"';
                } else if (statusCtx.status === "warning") {
                    htmlStr += ' class="swlStatusWarning"';
                }
                htmlStr += '>' + statusCtx.message + '</span>';
                jqStatus.html(htmlStr);
                jqStatus.css({ "min-height": "20px" });
            }
            return this;
        };

        this.setTabFooter = function(htmlStr) {
            getTabFooter().html(htmlStr);
            return this;
        };

        this.setTblSummary = function(htmlStr) {
            if ($(jqStr + '_tblSummary').length === 0) {
                getTabFooter().append('<div class="swlTblSummary" id="' + tabCtx.bodyId + '_tblSummary"></div>');
            }
            $(jqStr + '_tblSummary').html(htmlStr);
            return this;
        }

        this.setClickHandler = function() {
            var jqElem = $(this);
            var tblContainer = null;

            if (opts.fEvtHandler !== null || opts.footer.length > 0) {
                jqElem = getTabFooter();
            }
            if (opts.data !== undefined) {
                if (tabCtx.bodyId === "") {
                    tabCtx = $.extend({}, tabCtx, opts.data);
                }
                if (tabCtx.bodyId !== opts.data.bodyId) {
                    tabCtx.callerId = opts.data.bodyId;
                } else {
                    tabCtx.callerId = "";
                }
                if (tabCtx.data === undefined) {
                    tabCtx.data = opts.data;
                }
            }
            tabCtx.opts = opts;
            jqElem.find('[class*="swlEvent"]').each(function() {
                $(this).unbind('click').bind('click', { 'tabCtx': tabCtx }, function(event) {
                    var className = event.currentTarget.className;
                    tabCtx = event.data['tabCtx'];
                    if (tabCtx.bodyId.length > 0 && (tabCtx.tblCtrl === undefined || tabCtx.tblCtrl === null)) {
                        tblContainer = $('#' + tabCtx.bodyId).find('.swlTblContainer');
                        if (tblContainer.length > 0 && tblContainer.data('tblCtrl') !== null) {
                            tabCtx.tblCtrl = tblContainer.data('tblCtrl');
                        }
                    }
                    tabCtx.isTable = $(this).parents('.swlTable').length > 0;
                    tabCtx.isFilter = $(this).parents('.swlContentHdr').length > 0;
                    tabCtx.isFooter = $(this).parents('.swlTabFooter').length > 0;
                    tabCtx.isPopup = $(this).parents('.swlStylizePopup').length > 0;
                    tabCtx.isContent = !tabCtx.isTable && !tabCtx.isFilter && !tabCtx.isFooter && !tabCtx.isPopup;
                    // now get the action type from the class
                    tabCtx.isAdd = tabCtx.isApply = tabCtx.isDelete = tabCtx.isCancel =
                        tabCtx.isClose = tabCtx.isEdit = tabCtx.isTrigger = tabCtx.isDispatch = tabCtx.isReset = false;
                    if ($(event.currentTarget).hasClass("swlEventAdd")) {
                        tabCtx.isAdd = true;
                        tabCtx.action = 'Add';
                    } else if ($(event.currentTarget).hasClass("swlEventApply")) {
                        tabCtx.isApply = true;
                        tabCtx.action = 'Apply';
                    } else if ($(event.currentTarget).hasClass("swlEventClose")) {
                        tabCtx.isClose = true;
                        tabCtx.action = 'Close';
                    } else if ($(event.currentTarget).hasClass("swlEventCancel")) {
                        tabCtx.isCancel = true;
                        tabCtx.action = 'Cancel';
                    } else if ($(event.currentTarget).hasClass("swlEventDelete")) {
                        tabCtx.isDelete = true;
                        tabCtx.action = 'Delete';
                    } else if ($(event.currentTarget).hasClass("swlEventEdit")) {
                        tabCtx.isEdit = true;
                        tabCtx.action = 'Edit';
                    } else if ($(event.currentTarget).hasClass("swlEventSave")) {
                        tabCtx.isSave = true;
                        tabCtx.action = 'Save';
                    } else if ($(event.currentTarget).hasClass("swlEventReset")) {
                        tabCtx.isReset = true;
                        tabCtx.action = 'Reset';
                    } else {
                        tabCtx.action = className.substring(className.indexOf('swlEvent') + 8);
                        if (tabCtx.action.indexOf(' ') !== -1) {
                            tabCtx.action = tabCtx.action.substring(0, tabCtx.action.indexOf(' '));
                        }
                        tabCtx["is" + tabCtx.action] = true;
                    }
                    if (tabCtx.isTable) {
                        if ($(this).parents('.swlTblRow').attr('name') !== undefined) {
                            tabCtx.tblRowName = $(this).parents('.swlTblRow').attr('name');
                        }
                        if ($(this).parents('.swlTblRow').attr('id') !== undefined) {
                            tabCtx.tblRowId = $(this).parents('.swlTblRow').attr('id');
                        }
                    }
                    if (opts.callDispatch === true) {
                        tabCtx.isDispatch = true;
                    }
                    if (opts.callEventHandler === true && opts.eventHandler !== undefined &&
                        opts.eventHandler !== null && typeof opts.eventHandler === "function") {
                        opts.eventHandler(event);
                    } else if (tabCtx.isDispatch) {
                        tabCtx.opts = opts;
                        $(this).snwlCtxDispatch(tabCtx);
                    } else if (tabCtx.isFooter) {
                        if (opts.fEvtHandler !== undefined && opts.fEvtHandler !== null &&
                            typeof opts.fEvtHandler === "function") {
                            opts.fEvtHandler(event);
                        } else {
                            $(this).snwlCtxDispatch(tabCtx);
                        }
                    } else if (tabCtx.isTable && (tabCtx.isEdit || tabCtx.isDelete)) {
                        $(this).snwlCtxDispatch(tabCtx);
                    } else if (opts.eventHandler !== undefined && opts.eventHandler !== null &&
                        typeof opts.eventHandler === "function") {
                        opts.eventHandler(event);
                    } else {
                        // for new swlEvent*s, try dispatch
                        tabCtx.isDispatch = true;
                        tabCtx.opts = opts;
                        $(this).snwlCtxDispatch(tabCtx);
                    }
                });
            });

            return this;
        };

        this.addContent = function(htmlStr) {
            var lastChild = $(this).children(":last");
            if (lastChild.length > 0) {
                lastChild.after(htmlStr);
            } else {
                $(this).append(htmlStr);
            }
            return this;
        };

        this.removeContent = function() {
            $(this).empty();
            return this;
        };

        this.confirm = function() {
            var blockUICss = {
                'min-width': '300px',
                width: '300px',
                color: '#676D7F',
                cursor: 'default',
                padding: '0',
                margin: '0',
                border: 'none',
                backgroundColor: '#FFFFFF',
                top: '100px',
                left: '200px'
            };
            // wrap with divs whose background images provide rounded corners
            var htmlStr = '<div class="swlRoundedCorner swlBorderShadow">';
            htmlStr += '<div class="swlStylizePopup">';

            if (opts.css) {
                blockUICss = $.extend({}, blockUICss, opts.css);
            }
            if (opts.title !== "") {
                htmlStr += '<div class="swlStylizePopupHdr"><span>';
                htmlStr += opts.title;
                htmlStr += '</span></div>';
            }

            htmlStr += '<div>';
            htmlStr += opts.msg;
            htmlStr += '</div>';

            htmlStr += '<div class="swlPanelRow"><span class="swlPanelButtons">';
            htmlStr += '<input type="button" class="button swlRoundedCorner" id="msgOk" value="OK" />';
            htmlStr += '<input type="button" class="button swlRoundedCorner" id="msgCancel" value="Cancel" />';
            htmlStr += '</span></div>';

            // close swlStylizePopup div and rounded corner divs
            htmlStr += '</div></div>';

            if ($.browser.mozilla && $.browser.version.substr(0, 3) === '1.9' &&
                $(navigator)[0].platform.indexOf('Linux') !== -1) {
                $.blockUI.defaults.applyPlatformOpacityRules = false;
                $.blockUI.defaults.fadeIn = 0;
                $.blockUI.defaults.fadeOut = 0;
            }

            if (opts.multiFrame) {
                if (getFrame('outlookFrame') !== null) {
                    getFrame('outlookFrame').blockOutlookView('0.2');
                }
            }
            $.blockUI({
                message: htmlStr,
                css: blockUICss,
                fadeIn: 0,
                overlayCSS: { opacity: '0.2', backgroundColor: '#FFF' }
            });
            $('#msgOk').unbind('click').bind('click', { 'multiFrame': opts.multiFrame }, function(event) {
                if (event.data['multiFrame']) {
                    if (getFrame('outlookFrame') !== null) {
                        getFrame('outlookFrame').unblockOutlookView();
                    }
                }
                $.unblockUI();
                if (opts.dataHandler !== undefined) {
                    opts.dataHandler(true, opts.data);
                }
            });
            $('#msgCancel').unbind('click').bind('click', { 'multiFrame': opts.multiFrame }, function(event) {
                if (event.data['multiFrame']) {
                    if (getFrame('outlookFrame') !== null) {
                        getFrame('outlookFrame').unblockOutlookView();
                    }
                }
                $.unblockUI();
                if (opts.dataHandler !== undefined) {
                    opts.dataHandler(false, opts.data);
                }
            });
        };

        this.popup = function() {
            var blockUICss = {
                'min-width': '450px',
                width: '450px',
                color: '#676D7F',
                cursor: 'default',
                padding: '0',
                margin: '0',
                border: 'none',
                backgroundColor: 'white',
                top: '100px',
                left: '200px'
            };

            if (opts.css) {
                blockUICss = $.extend({}, blockUICss, opts.css);
            }

            // wrap with divs whose background images provide rounded corners
            var htmlStr = '<div class="swlRoundedCorner swlBorderShadow">';

            htmlStr += '<div class="swlStylizePopup">';

            htmlStr += '<div class="swlBoxTitle" style="text-align:left;padding:2px;margin:-15px -16px 20px -14px;">';
            if (opts.help) {
                htmlStr += '<span class="swlPopupIcon">';
                htmlStr += '<img id="helpButton" src="help_icon.png" alt="" ';
                htmlStr += 'onclick="displayHelp();" title="Click for Help"></span>';
            }
            if (opts.title !== "") {
                htmlStr += '<div class="swlBoxTitleInset" ';
                if (bw.ie) {
                    if (parseInt(bw.version) == 7) {
                        htmlStr += 'style="padding:8px;margin:7px 4px 0 1px;">';
                    } else {
                        htmlStr += 'style="padding:8px;margin:5px 4px 0 1px;">';
                    }
                } else {
                    htmlStr += 'style="padding:8px;margin:5px 5px 0 2px">';
                }
                htmlStr += opts.title + '</div>';
            }
            htmlStr += '</div>';

            htmlStr += '<div>';
            htmlStr += opts.msg;
            htmlStr += '</div>';

            if (htmlStr.indexOf("swlEventClose") === -1) {
                htmlStr += '<div class="swlPopupButtonBar" style="float:right;">';
                htmlStr += '<input id="closeBtn" type="button" class="button swlRoundedCorner swlEventClose" value="Close">';
                htmlStr += '</div>';
            }

            if (htmlStr.indexOf("statusMsg") === -1) {
                htmlStr += '<div id="statusMsg" class="swlStatusMsg"></div>';
            }

            // close swlStylizePopup div and rounded corner divs
            htmlStr += '</div></div>';

            if ($.browser.mozilla && $.browser.version.substr(0, 3) === '1.9' &&
                $(navigator)[0].platform.indexOf('Linux') !== -1) {
                $.blockUI.defaults.applyPlatformOpacityRules = false;
                $.blockUI.defaults.fadeIn = 0;
                $.blockUI.defaults.fadeOut = 0;
            }

            $.blockUI({
                message: htmlStr,
                css: blockUICss,
                fadeIn: 0,
                timeout: opts.timeout,
                overlayCSS: { opacity: '0.6', backgroundColor: '#FFF' }
            });

            $('.swlEventClose').click(function(event) {
                $.unblockUI();
            });

            /* scroll with parent */
            $('.blockUI.blockPage').css('position', 'absolute');

        };

        this.statusAlert = function() {
            var blockUICss = {
                'min-width': '350px',
                width: '350px',
                color: '#676D7F',
                cursor: 'default',
                padding: '0',
                margin: '0',
                border: 'none',
                backgroundColor: 'transparent',
                opacity: '.9',
                top: '10px',
                left: '',
                right: '10px'
            };
            // wrap with divs whose background images provide rounded corners
            var htmlStr = '<div class="lb' + opts.theme + '">';
            htmlStr += '<div class="rb' + opts.theme + '">';
            htmlStr += '<div class="bb' + opts.theme + '">';
            htmlStr += '<div class="blc' + opts.theme + '">';
            htmlStr += '<div class="brc' + opts.theme + '">';
            htmlStr += '<div class="tb_line' + opts.theme + '">';
            htmlStr += '<div class="tlc' + opts.theme + '">';
            htmlStr += '<div class="trc' + opts.theme + '">';
            htmlStr += '<div class="swlStylizeGrowlPopup">';

            htmlStr += '<div class="swlStylizeGrowl">';
            htmlStr += '<span class="swlStylizePopupClose">';
            htmlStr += '<img id="closePopup" src="trash.gif" alt="" ';
            htmlStr += 'onclick="$.unblockUI();" title="Click to Close" /></span>';

            if (opts.title !== "") {
                htmlStr += '<div class="swlStylizeGrowlHdr"><span>';
                htmlStr += opts.title;
                htmlStr += '</span>';
                htmlStr += '</div>';
            }

            htmlStr += '<div>';
            htmlStr += opts.msg;
            htmlStr += '</div>';

            // close swlStylizeGrowl div, swlStylizePopup div and rounded corner divs
            htmlStr += '</div></div></div></div></div></div></div></div></div></div>';

            if (opts.css) {
                blockUICss = $.extend({}, blockUICss, opts.css);
            }
            $.blockUI({
                fadeIn: 700,
                fadeOut: 700,
                timeout: opts.timeout > 0 ? opts.timeout : 15000,
                showOverlay: false,
                centerY: false,
                message: htmlStr,
                css: blockUICss
            });
        };

        switch (opts.action) {

            case "tabify":
                return this.each(function() {
                    var contentHdr;
                    var refreshDiv;
                    var tabCtrl = null;
                    var tblCtrl = null;
                    var title = opts.title;
                    var jqElem = null;

                    tabCtx.tblCtrl = $(this).data('tblCtrl');

                    if (opts.skin === 'retro') {
                        contentHdr = $('#' + tabCtx.headerId);
                    } else {
                        contentHdr = $(this).parents('.swlContent').find('.swlContentHdr');
                    }
                    if (!$(this).hasClass("swlTabContainer")) {
                        $(this).addClass("swlTabContainer");
                    }
                    if (opts.type === 'table' && !$(this).hasClass("swlTblContainer")) {
                        $(this).addClass("swlTblContainer");
                    }

                    if (title === "") {
                        try {
                            title = $(jqStr).swlFolderControl().getDescName();
                        } catch (e) {}
                    }

                    if (opts.skin === "retro" && title !== "") {
                        htmlStr = '<span class="ltSpan groupLabel">' + title + '</span>';
                    } else {
                        htmlStr = "";
                    }
                    // set pagination area within the tab - provides vertical spacing even if unused for pagination
                    htmlStr += '<div id="' + this.id + '_pagination" class="pagination"></div>';
                    if (opts.skin === "retro") {
                        if (opts.paginate === false && title !== "") {
                            htmlStr += '<div class="swlSectionLineLite"></div><br>';
                        }
                        if (title !== "") {
                            $('#' + this.id + 'Header').append(htmlStr);
                        }
                    } else {
                        $(this).parents(".swlContentContainer").siblings(".swlHeader").append(htmlStr);

                        // check for legacy tab layout
                        tabDiv = $(this).parents('.swlContent').find('#tabs').eq(0);
                        if (tabDiv.length > 0) {
                            tabDiv.find('li').remove();
                            tabDiv.remove().prependTo($(this).parents(".swlContentContainer").siblings(".swlHeader").eq(0));
                        } else {
                            // assumes legacy html layout with tabs div within header div
                            tabDiv = $('#header > #tabs').eq(0);
                        }
                        // add tabs if not found in html
                        if (tabDiv.length === 0) {
                            $(this).parents(".swlContentContainer").siblings(".swlHeader").append('<ul id="tabs"></ul>');
                            tabDiv = $(this).parents(".swlContentContainer").siblings(".swlHeader").find('#tabs').eq(0);
                        }

                        // set tab, add to tab area
                        htmlStr = '<li id="' + this.id + '_trigger" class="tabOff"><a class="tabText">';
                        htmlStr += '<span>' + title + '</span></a></li>';

                        tabDiv.append(htmlStr);
                        tabCtrl = tabDiv.find(jqStr + '_trigger');
                        if (!opts.showTabs) {
                            $(this).parents(".swlContentContainer").siblings(".swlHeader").hide;
                        }
                    }

                    if (opts.refresh) {
                        if (opts.skin === 'retro') {
                            if (contentHdr.find('.swlRefresh').length === 0) { // ensure tabheader is created
                                setTabHeader(contentHdr, tabCtx.headerId);
                            }
                            refreshDiv = contentHdr.find('.swlRefresh');
                        } else {
                            if (contentHdr.find('#' + tabCtx.headerId).length === 0) {
                                setTabHeader(contentHdr, tabCtx.headerId);
                            }
                            refreshDiv = $('#' + tabCtx.headerId + ' .swlRefresh');
                        }
                        if (refreshDiv.find('.toggleUpdate').length === 0) {
                            switch (opts.refreshType) {
                                case 'auto':
                                case 'linked':
                                    htmlStr = '<img id="pauseBtnImg" class="toggleUpdate" src="pauseOn.png" title="Pause Refresh">';
                                    htmlStr += '<img id="playBtnImg" class="toggleUpdate" src="playOff.png" title="Refresh Active">';
                                    break;
                                case 'static':
                                    htmlStr = '<img id="refreshBtnImg" class="toggleUpdate" src="refresh.gif" title="Refresh Table">';
                                    break;
                            }
                            refreshDiv.append(htmlStr);
                        }
                        if (opts.refreshCb) {
                            $(".toggleUpdate").unbind('click').bind('click', function() {
                                opts.refreshCb(opts.refreshType);
                            });
                        } else {
                            $(".toggleUpdate").unbind('click').bind('click', function() {
                                getSwlTblController($(jqStr).attr("id")).toggleRefresh(opts.refreshType);
                            });
                        }
                        getSwlTblController($(jqStr).attr("id")).refreshType = opts.refreshType;
                    } else if (opts.folderBar) {
                        if ($(this).find('.folderBarDiv').length === 0) {
                            setTabHeader(contentHdr, tabCtx.headerId);
                            htmlStr = '<div class="folderBarDiv">';
                            htmlStr += '<div class="folderBar0"></div>';
                            htmlStr += '<div class="folderBar1"></div>';
                            htmlStr += '<div class="folderBar2"></div>';
                            htmlStr += '<div class="folderBar3"></div>';
                            htmlStr += '<div class="folderBar4"></div>';
                            htmlStr += '<div class="folderBar5"></div></div>';

                            $('#' + tabCtx.headerId).append(htmlStr);
                        }
                    }

                    if (opts.skin !== "retro") {
                        ftrDiv = $(this).parents('.swlContentContainer').siblings('.swlFooter').eq(0);

                        // create empty tabbed footer div (to be filled via api) or
                        // move any footers found within div (by id or class) into tabbed container
                        if ($(jqStr + '_footer').length === 0 && $(jqStr + " .swlTabFooter").length === 0) {
                            // add tabbed footer container
                            htmlStr = '<div class="swlTabFooter" id="' + this.id + '_footer"></div>';
                            ftrDiv.append(htmlStr);
                        } else if ($(jqStr + " .swlTabFooter").length > 0) {
                            $(jqStr + " .swlTabFooter").attr("id", this.id + "_footer");
                            $(jqStr + " .swlTabFooter").remove().appendTo(ftrDiv);
                        } else {
                            if (!$(jqStr + '_footer').hasClass('swlTabFooter')) {
                                $(jqStr + '_footer').addClass('swlTabFooter');
                            }
                            $(jqStr + "_footer").remove().appendTo(ftrDiv);
                        }
                    }

                    // set footer contents
                    if (opts.footer !== undefined && opts.footer !== '') {
                        that.setTabFooter(opts.footer);
                        that.setClickHandler();
                    } else if (tabCtx.opts === undefined && opts.dataHandler !== undefined) {
                        tabCtx.opts = opts;
                    }

                    if (opts.tabDisable === true) {
                        tabCtrl.addClass('swlTabDisabled');
                    } else {
                        // set the pagination controls
                        if (opts.paginate && tabCtx.tblCtrl !== undefined) {
                            tabCtx.tblCtrl.renderPagination();
                        }

                        if (opts.skin !== "retro") {
                            // set the tab onclick
                            tabCtrl.unbind('click').bind('click', { 'tabCtx': tabCtx }, function(event) {
                                // set the tab and tab elements visibility via onTabClick prior to calling the ctxHandler
                                // so that it is working on visible items with appropriate css width and other properties
                                onTabClick(this);
                                if (opts.ctxHandler !== null && typeof opts.ctxHandler === "function") {
                                    tabCtx = event.data['tabCtx'];
                                    tabCtx.isTable = tabCtx.isContent = tabCtx.isFilter = tabCtx.isFooter = false;
                                    tabCtx.isAdd = tabCtx.isApply = tabCtx.isDelete = tabCtx.isClose = tabCtx.isEdit = false;
                                    tabCtx.isTrigger = true;
                                    tabCtx.action = "GET";
                                    if (tabCtx.tblCtrl && tabCtx.tblCtrl.containerId === tabCtx.bodyId) {
                                        tabCtx.isTable = true;
                                    }
                                    if (tabCtx.opts === null || tabCtx.opts === undefined) {
                                        tabCtx.opts = opts;
                                    }
                                    opts.ctxHandler(tabCtx);
                                }

                                try {
                                    /* correct folder height if possible */
                                    if (typeof $(jqStr).swlFolderControl === "function") {
                                        $(jqStr).swlFolderControl().correctFolderTableHeight();
                                    }
                                } catch (e) {}

                                tblCtrl = tabCtx.tblCtrl ? tabCtx.tblCtrl : $('#' + tabCtx.bodyId).data('tblCtrl');
                                if (tblCtrl && tblCtrl.ctxData && tblCtrl.ctxData.hdrs) {
                                    $('#' + tabCtx.bodyId).swlTable(tblCtrl).syncTableSettings().setColWidth();
                                }

                                /* hack for <=IE7 since the width of header/footer table would shrink */
                                if (bw.ie && parseInt(bw.version) <= 7) {
                                    jqElem = $('#' + tabCtx.bodyId + 'TableHeaderId, ' + '#' + tabCtx.bodyId + 'TableFooterId');
                                    jqElem.width($('#' + tabCtx.bodyId + 'EntryTable').width());
                                }
                            });
                        }
                    }
                });
                break;

            case "boxify":
                return this.each(function() {
                    var jqContent;

                    if (opts.skin === 'retro') {
                        contentHdr = $('#' + tabCtx.headerId);
                    } else {
                        contentHdr = $(this).parents('.swlContent').find('.swlContentHdr');
                    }
                    if (!$(this).parent('.swlContent').hasClass("swlBox")) {
                        $(this).parent('.swlContent').addClass("swlBox");
                    }
                    if (!$(this).hasClass("swlTabContainer")) {
                        $(this).addClass("swlTabContainer");
                    }
                    if (opts.skin !== "retro") {
                        ftrDiv = $(this).parents('.swlContentContainer').siblings('.swlFooter').eq(0);
                        if (ftrDiv === undefined || ftrDiv.length === 0) {
                            $(this).parents('.swlContentContainer').after("<div class='swlFooter' id='" + this.id + "Footer'></div>");
                            ftrDiv = $(this).parents('.swlContentContainer').siblings('.swlFooter');
                        }

                        // create empty tabbed footer div (to be filled via api) or
                        // move any footers found within div (by id or class) into tabbed container
                        if ($(jqStr + '_footer').length === 0 && $(jqStr + " .swlTabFooter").length === 0) {
                            // add tabbed footer container
                            htmlStr = '<div class="swlTabFooter" id="' + this.id + '_footer"></div>';
                            ftrDiv.append(htmlStr);
                        } else if ($(jqStr + " .swlTabFooter").length > 0) {
                            $(jqStr + " .swlTabFooter").attr("id", this.id + "_footer");
                            $(jqStr + " .swlTabFooter").remove().appendTo(ftrDiv);
                        } else {
                            if (!$(jqStr + '_footer').hasClass('swlTabFooter')) {
                                $(jqStr + '_footer').addClass('swlTabFooter');
                            }
                            $(jqStr + "_footer").remove().appendTo(ftrDiv);
                        }
                    }

                    // set footer contents
                    if (opts.footer !== undefined && opts.footer !== "") {
                        that.setTabFooter(opts.footer);
                        that.setClickHandler();
                    } else if (tabCtx.opts === undefined && opts.dataHandler !== undefined) {
                        tabCtx.opts = opts;
                    }

                    if (opts.ctxHandler !== null && opts.fetchNow) {
                        tabCtx.isContent = true;
                        tabCtx.opts = opts;
                        opts.ctxHandler(tabCtx);
                    }

                });
                break;

            case "setInfo":
                return this.each(function() {
                    var contentHdr;
                    var infoDiv;
                    if (opts.skin === 'retro') {
                        contentHdr = $('#' + tabCtx.headerId);
                    } else {
                        contentHdr = $(this).parents('.swlContent').find('.swlContentHdr');
                    }
                    if (opts.info !== null) {
                        if (opts.skin === 'retro') {
                            if (contentHdr.find('.swlInfo').length === 0) { // ensure tabheader is created
                                setTabHeader(contentHdr, tabCtx.headerId);
                            }
                            infoDiv = contentHdr.find('.swlInfo');
                        } else {
                            if (contentHdr.find('#' + tabCtx.headerId).length === 0) {
                                setTabHeader(contentHdr, tabCtx.headerId);
                            }
                            infoDiv = $('#' + tabCtx.headerId + ' .swlInfo');
                        }
                        infoDiv.append('<img src="iconInfo.gif"/>');
                        $(".swlInfo").unbind('mouseout').bind('mouseout', function() {
                            htt();
                        });
                        $(".swlInfo").unbind('mouseover').bind('mouseover', { 'caption': opts.info.caption, 'body': opts.info.body }, function(event) {
                            stt(event.data['caption'], event.data['body'], event, this, null, 3, 325);
                        });
                    }
                });
                break;

            case "setRefresh":
                return this.each(function() {
                    var contentHdr;
                    var refreshDiv;
                    if (opts.skin === 'retro') {
                        contentHdr = $('#' + tabCtx.headerId);
                    } else {
                        contentHdr = $(this).parents('.swlContent').find('.swlContentHdr');
                    }
                    if (opts.skin === 'retro') {
                        if (contentHdr.find('.swlRefresh').length === 0) { // ensure tabheader is created
                            setTabHeader(contentHdr, tabCtx.headerId);
                        }
                        refreshDiv = contentHdr.find('.swlRefresh');
                    } else {
                        if (contentHdr.find('#' + tabCtx.headerId).length === 0) {
                            setTabHeader(contentHdr, tabCtx.headerId);
                        }
                        refreshDiv = $('#' + tabCtx.headerId + ' .swlRefresh');
                    }
                    if (refreshDiv.find('.toggleUpdate').length === 0) {
                        switch (opts.refreshType) {
                            case 'auto':
                            case 'linked':
                                htmlStr = '<img id="pauseBtnImg" class="toggleUpdate" src="pauseOn.png" title="Pause Refresh">';
                                htmlStr += '<img id="playBtnImg" class="toggleUpdate" src="playOff.png" title="Refresh Active">';
                                break;
                            case 'static':
                                htmlStr = '<img id="refreshBtnImg" class="toggleUpdate" src="refresh.gif" title="Refresh Table">';
                                break;
                        }
                        refreshDiv.append(htmlStr);
                    }
                    if (opts.refreshCb) {
                        $(".toggleUpdate").unbind('click').bind('click', function() {
                            opts.refreshCb(opts.refreshType);
                        });
                    } else {
                        $(".toggleUpdate").unbind('click').bind('click', function() {
                            getSwlTblController($(jqStr).attr("id")).toggleRefresh(opts.refreshType);
                        });
                    }
                    getSwlTblController($(jqStr).attr("id")).refreshType = opts.refreshType;
                });
                break;

            case "setFilter":
                if ($('.swlFilterIcon').length === 0) {
                    // this is the first filter added to the page, fetch the filter list
                    fetchFilterList();
                }
                return this.each(function() {
                    var fData = {
                        name: this.id + '_fList',
                        callerDefined: false
                    };
                    var contentHdr;
                    if (opts.skin === 'retro') {
                        contentHdr = $('#' + tabCtx.headerId);
                    } else {
                        contentHdr = $(this).parents('.swlContent').find('.swlContentHdr');
                    }
                    if (opts.skin === 'retro') {
                        if (contentHdr.find('.swlTableFilter').length === 0) { // ensure tabheader is created
                            setTabHeader(contentHdr, tabCtx.headerId);
                        }
                    } else {
                        if (contentHdr.find('#' + tabCtx.headerId).length === 0) {
                            setTabHeader(contentHdr, tabCtx.headerId);
                        }
                    }
                    if (opts.name !== "") {
                        fData.name = opts.name;
                    }
                    htmlStr = '';
                    if (opts.title !== "") {
                        htmlStr += '<span>' + opts.title + ':</span>';
                    } else {
                        htmlStr += '<span>Filter:</span>';
                    }
                    if (opts.filterHtml !== "") {
                        htmlStr += opts.filterHtml;
                    } else {
                        htmlStr += '<select size="1" ';
                        htmlStr += 'name="' + fData.name + '" id="' + fData.name + '">';
                        if (opts.filterOpts !== "") {
                            htmlStr += opts.filterOpts;
                        }
                        htmlStr += '</select>';
                    }
                    htmlStr += '<img class="swlFilterIcon" src="add_edit.gif" alt=""/>';
                    $('#' + tabCtx.headerId + ' .swlTableFilter').append(htmlStr);

                    if (opts.filterOpts !== "") {
                        fData.callerDefined = true;
                    }
                    $('#' + fData.name).data('filterData', fData);
                    if (opts.filterHtml === "") {
                        $('#' + tabCtx.headerId + ' .swlFilterIcon').unbind('click').bind('click', filterCb);
                        if (opts.eventHandler !== null) {
                            $('#' + tabCtx.headerId + ' select').unbind('change').bind('change', opts.eventHandler);
                        } else {
                            $('#' + tabCtx.headerId + ' select').unbind('change').bind('change', function() {
                                var fData = $(this).data('filterData');
                                var fList = $(this).parents('.swlContentContainer').data('filterList');
                                var fName = this.options[this.selectedIndex].text;
                                var fItem = null;
                                for (i = 0; i < fList.length; i++) {
                                    if (fList[i].filterName === fName) {
                                        fItem = fList[i];
                                        break;
                                    }
                                }
                                if (fData !== undefined && fItem !== null) {
                                    fData.filterName = fItem.filterName;
                                    fData.filterString = fItem.filterString;
                                }
                            });
                        }
                    }
                });
                break;

            case "setSearch":
                return this.each(function() {
                    var contentHdr;
                    if (opts.skin === 'retro') {
                        contentHdr = $('#' + tabCtx.headerId);
                    } else {
                        contentHdr = $(this).parents('.swlContent').find('.swlContentHdr');
                    }
                    if (opts.skin === 'retro') {
                        if (contentHdr.find('.swlTableSearch').length === 0) { // ensure tabheader is created
                            setTabHeader(contentHdr, tabCtx.headerId);
                        }
                    } else {
                        if (contentHdr.find('#' + tabCtx.headerId).length === 0) {
                            setTabHeader(contentHdr, tabCtx.headerId);
                        }
                    }
                    // note that input is adjacent to img - this adjacency is used by the handlers
                    htmlStr = '<input type="text" maxlength="255" ';
                    htmlStr += 'name="' + opts.name + '"/>';
                    htmlStr += '<img class="swlSearchIcon" src="search.gif" alt=""/>';
                    $('#' + tabCtx.headerId + ' .swlTableSearch').append(htmlStr);
                    // add keypress handler
                    $('#' + tabCtx.headerId + ' input').unbind('keypress').bind('keypress', function(e) {
                        onKeyPress(e);
                    });
                    if (opts.eventHandler !== null) {
                        $('#' + tabCtx.headerId + ' .swlSearchIcon').unbind('click').bind('click', opts.eventHandler);
                    }
                });
                break;

            case "setTable":
                return this.each(function() {
                    htmlStr = "";
                    if (!$(this).hasClass("swlTblContainer")) {
                        $(this).addClass("swlTblContainer");
                    }
                    // insert default table structure to be filled via AJAX - only if no static table is found within this elem
                    if ($(this).children("table").length === 0) {
                        htmlStr = '<table class="swlTable" border="0" width="100%" cellspacing="0" cellpadding="4" summary="">';
                        htmlStr += '<thead><tr class="swlTblHdrRow"></tr></thead>';
                        htmlStr += '<tbody></tbody>';
                        htmlStr += '</table>';
                        $(this).prepend(htmlStr);
                    } else if (!$(this).children("table").eq(0).hasClass('swlTable')) {
                        $(this).children("table").eq(0).addClass('swlTable');
                    }
                    if (opts.pgOpts !== undefined && opts.pgOpts !== null) {
                        opts.pgOpts.skin = opts.skin;
                    }
                    // set the controller for this table
                    tabCtx.tblCtrl = new SwlTblController(this.id, opts.pgOpts || {});
                    if (opts.ctxHandler !== null) {
                        tabCtx.tblCtrl.ctxHandler = opts.ctxHandler;
                    }
                    $(this).data('tblCtrl', tabCtx.tblCtrl);

                    if (opts.tblHdrs !== '') {
                        tabCtx.tblCtrl.addColHdrs(opts.tblHdrs);
                    }
                    if (opts.ctxHandler !== null && opts.fetchNow) {
                        tabCtx.isContent = tabCtx.isFilter = tabCtx.isFooter = false;
                        tabCtx.isAdd = tabCtx.isApply = tabCtx.isDelete = tabCtx.isClose = tabCtx.isEdit = false;
                        tabCtx.isTrigger = tabCtx.isTable = true;
                        tabCtx.opts = opts;
                        opts.ctxHandler(tabCtx);
                    }
                });
                break;

            case "layout":
                return this.each(function() {
                    // check for required DOM elem for page settings control(s), create if needed -
                    // this assumes pageHeader exists - always true for swl gen5 html pages
                    if (opts.skin === "retro") {
                        $(this).find('.swlContent').find('div').each(function() {
                            if ($(this).hasClass('swlFooter') || $(this).hasClass('swlTabFooter') ||
                                $(this).hasClass('swlContentHdr') || $(this).hasClass('swlExclude')) {
                                return true; // skip and continue
                            }
                            if ($(this).parent('.swlContent').length === 0) {
                                return true; // skip and continue
                            }
                            $(this).css('clear', 'both');
                            $(this).before('<div id="' + this.id + 'Header" class="swlContentHdr"></div>');
                            $(this).after('<div id="' + this.id + '_footer" class="swlTabFooter swlFooter"></div>');
                            $('#' + this.id + '_footer').after('<div id="' + this.id + '_tblSummary" class="swlTblSummary"></div>');
                            return true;
                        });

                    } else {
                        if (opts.noPageSettings !== true) {
                            if ($(this).siblings('#pageSettings').eq(0).length === 0) {
                                $(this).siblings('#pageHeader').css({
                                    'position': 'static',
                                    'top': '10px',
                                    'left': '15px',
                                    'min-height': opts.pageHeaderHeight + 'px'
                                }).
                                after('<div id="pageSettings" class="pageSetting"><img src="settings.gif" alt="" /></div>');

                                // attach the skin type to clickable elem
                                $('.pageSetting img').data('skin', opts.skin);

                                // add onClick to elem to enable toggling of skin
                                $('.pageSetting img').bind('click', function() {
                                    var skin = $('.pageSetting img').data("skin");
                                    $('.pageSetting img').data('skin', skin === 'nextGen' ? 'classic' : 'nextGen');

                                    $('.swlContentContainer').stylize({
                                        action: 'skin',
                                        skin: $('.pageSetting img').data("skin")
                                    });
                                });
                            }
                        }
                        if (opts.createHdr === true) {
                            // check for required DOM elem for tabs, create if needed
                            if ($(this).siblings('.swlHeader').eq(0).length === 0) {
                                $(this).before('<div id="' + this.id + 'Header" class="swlHeader"></div>');
                            }
                        }
                        if (opts.createFtr === true) {
                            // check for footer elem - legacy, classic and nextGen are mutually exclusive
                            lgcyFtr = $(this).find('.swlContent > #footer').eq(0);
                            if ($(this).siblings('.swlFooter').length === 0 && lgcyFtr.length === 0) {
                                $(this).after('<div id="' + this.id + '_footer" class="swlFooter"></div>');
                            }
                            if (lgcyFtr.length > 0) {
                                if ($(this).siblings('.swlFooter').length === 0) {
                                    lgcyFtr.remove().insertAfter(this);
                                }
                            }
                        }
                    }

                    if (opts.topBar === true) {
                        addTopBar();
                    }

                    if (opts.drillDown === true) {
                        addDrillDown();
                    }

                    if (opts.contentHdrHeight > 0) {
                        if ($(this).find('.swlContentHdr').eq(0).length === 0) {
                            $(this).find('.swlContent').prepend('<div class="swlContentHdr"></div>');
                        }
                        $(this).find('.swlContentHdr').css({ "min-height": opts.contentHdrHeight + "px" });
                    }

                    if (opts.statusHeight > 0) {
                        if ($(this).find('.swlStatus').eq(0).length === 0) {
                            $(this).find('.swlContent').append('<div class="swlStatus"></div>');
                        }
                        $(this).find('.swlStatus').css({ "min-height": opts.statusHeight + "px" });
                    }

                    if (opts.resize === true && opts.skin !== 'retro') {
                        var adjustScrollCb = function() {
                            $(that).find('.folderTableEntryDiv').filter(':visible').scroll();
                        }
                        var resizeListener = function() {
                            $(window).one("resize", function() {
                                if (opts.parentContainerId == null) {
                                    var skin = $('.pageSetting img').data("skin");
                                    skin = skin ? skin : opts.skin;
                                    $('.swlContentContainer').stylize({
                                        action: 'skin',
                                        skin: skin
                                    });
                                }
                                setTimeout(adjustScrollCb, 100); // accommodate IE event model
                                setTimeout(resizeListener, 100);
                            })
                        };
                        resizeListener();
                    }
                });
                break;

            case "skin":
                return this.each(function() {
                    var jqCanvas = $(this);
                    var id = this.id;
                    // one header and footer region per swlContentContainer
                    var jqHeader = jqCanvas.siblings('.swlHeader'); // contains the tabs - outside of the content container
                    var jqFooter = jqCanvas.siblings('.swlFooter');
                    var jqContent = jqCanvas.find('.swlContent');
                    // one swlContentHdr, swlTabContainer, and swlStatus per swlContent
                    var jqContentHdr = jqContent.find('.swlContentHdr');
                    var jqTabCon = jqCanvas.find('.swlTabContainer');
                    var jqTblCon = jqCanvas.find('.swlTblContainer');
                    var jqTable = null;
                    var jqThead = null;
                    var jqTfoot = null;
                    var jqStatus = jqContent.find('.swlStatus'); // within the content - sibling to the tab/tbl contents
                    // wrapper div that exists only in nextGen skin
                    var jqlb = jqCanvas.find('.lb' + opts.theme);
                    var cssVal,
                        paddingHt = 0,
                        padWidth = 0;
                    var switchSkin = false;
                    var skin,
                        deltaHt = 0,
                        $viewPort = opts.parentContainerId ? $("#" + opts.parentContainerId) : $('body');

                    opts.ngWidth = parseInt($.fn.stylize.defaults.ngWidth, 10);
                    opts.height = parseInt($.fn.stylize.defaults.height, 10);

                    $('body').height($(window).height() - yDelta);
                    $('body').width($(window).width() - xDelta);

                    // allow resize to larger than originally specified width
                    if (opts.stretchWidth === true) {
                        cssVal = parseInt(jqCanvas.css('margin-right'), 10);
                        if (!isNaN(cssVal)) {
                            padWidth += cssVal;
                        }
                        if (opts.parentContainerId) {
                            // viewPort is the user-supplied parent container
                            cssVal = parseInt($viewPort.css('margin-left'), 10);
                            if (!isNaN(cssVal)) {
                                padWidth += cssVal;
                            }
                            cssVal = parseInt($viewPort.css('margin-right'), 10);
                            if (!isNaN(cssVal)) {
                                padWidth += cssVal;
                            }
                            cssVal = parseInt($viewPort.css('padding-left'), 10);
                            if (!isNaN(cssVal)) {
                                padWidth += cssVal;
                            }
                            cssVal = parseInt($viewPort.css('padding-right'), 10);
                            if (!isNaN(cssVal)) {
                                padWidth += cssVal;
                            }
                            if ($viewPort.width() - padWidth > opts.ngWidth) {
                                opts.ngWidth = $viewPort.width() - padWidth;
                            }
                        } else if ($viewPort.width() > opts.ngWidth) {
                            opts.ngWidth = $viewPort.width();
                        }
                    }
                    if (opts.stretchHeight) {
                        $('body').css('overflow-y', 'hidden');
                        jqCanvas.siblings(':visible:not(span#ttipId)').each(function() {
                            var $elem = $(this);
                            if ($elem.hasClass('pageSetting')) {
                                return true;
                            }
                            if ($elem.hasClass('blockUI')) {
                                return true;
                            }
                            if ($elem.hasClass('swlHeader') && !opts.showTabs) {
                                return true;
                            }
                            if ($elem.attr('id') === 'pageHeader') { // this is sometimes a sibling and sometimes a level higher
                                return true; // but is always present so we will add explictly below
                            }
                            deltaHt += $elem.height();

                            // IE returns "auto" when css is not set and "NaN" when parseInt is called.
                            // Other browsers return "0px" rather than "auto", but we will check on all browsers.
                            cssVal = parseInt($elem.css('margin-top'), 10);
                            if (!isNaN(cssVal)) {
                                deltaHt += cssVal;
                            }
                            cssVal = parseInt($elem.css('margin-bottom'), 10);
                            if (!isNaN(cssVal)) {
                                deltaHt += cssVal;
                            }
                            cssVal = parseInt($elem.css('padding-top'), 10);
                            if (!isNaN(cssVal)) {
                                deltaHt += cssVal;
                            }
                            cssVal = parseInt($elem.css('padding-bottom'), 10);
                            if (!isNaN(cssVal)) {
                                deltaHt += cssVal;
                            }
                        });
                        cssVal += parseInt(jqCanvas.css('margin-bottom'), 10);
                        if (!isNaN(cssVal)) {
                            deltaHt += cssVal;
                        }
                        deltaHt += $('#pageHeader').height();
                        opts.height = $viewPort.height() - deltaHt;
                    }

                    jqContentHdr.css({ 'width': 'auto' });
                    $('.swlRefresh').css({ 'padding-top': '0' });

                    if (opts.skin === 'classic' || opts.skin === 'retro') {
                        // if switching skins, remove nextGen wrappers (after repositioning content)
                        if ($('.lb').length > 0) {
                            switchSkin = true;
                            // special processing to handle 'data' attached to tblCtrl - jquery doesn't copy properly
                            clonedContent = jqContent.clone(true);
                            $(clonedContent).prependTo($(this));
                            // find original data and add to cloned
                            $('.trc').find('.swlContent').find('.swlTabContainer').each(function() {
                                if ($(this).data('tblCtrl') !== undefined) {
                                    var that = this;
                                    $(clonedContent).find('#' + this.id).each(function() {
                                        $(this).data('tblCtrl', $(that).data('tblCtrl'));
                                    });
                                }
                            });
                            $('.lb').remove();
                            // when switching back from nextGen skin, need locate the cloned elements
                            jqContent = jqCanvas.find('.swlContent');
                            jqContentHdr = jqContent.find('.swlContentHdr');
                            if (jqCanvas.data('curTabId') !== undefined) {
                                jqTabCon = $('#' + jqCanvas.data('curTabId'));
                                jqTblCon = jqTabCon.find('.swlTblContainer');
                            }
                        }

                        if (opts.skin === "retro") {
                            if (opts.stretchWidth === true) {
                                // allow for left/right padding (plus scrollbar depending on variable content height)
                                if (opts.parentContainerId == null) {
                                    jqCanvas.css({
                                        'width': ($(window).width() - 28) + 'px', // 16 l/r padding, 12 scrollbar allowance
                                        'height': 'auto',
                                        'border': 'none'
                                    });
                                } else {
                                    jqCanvas.css({
                                        'width': ($("#" + opts.parentContainerId).width() - 28) + 'px', // 16 l/r padding, 12 scrollbar allowance
                                        'height': 'auto',
                                        'border': 'none'
                                    });
                                }
                            } else {
                                jqCanvas.css({
                                    'width': opts.width + 'px',
                                    'height': 'auto',
                                    'border': 'none'
                                });
                            }
                            jqContent.css({
                                'width': 'auto',
                                'height': 'auto',
                                'padding': '10px 0'
                            });
                            $('.swlContentHdr').each(function() {
                                if ($(this).find('.swlSectionLineLite').length > 0) {
                                    $(this).css({ 'padding': '0 0 12px 4px' });
                                } else {
                                    $(this).css({ 'padding': '0 0 6px 4px' });
                                }
                            });
                            jqTabCon.css('height', 'auto');
                            jqTblCon.css({ 'height': 'auto', 'width': 'auto' });

                            $('.swlTblHdrRow').height('24px');
                            $('.swlTable').css({ 'height': 'auto', 'width': '100%' });
                            $('tbody').css({ 'height': 'auto' });
                            $('.swlRefresh').css({ 'padding-top': '6px' });
                            $('.swlTabFooter').each(function() {
                                if ($(this).find('.button').length === 0) {
                                    $(this).css({
                                        'margin-bottom': '0',
                                        'padding-top': '20px',
                                        'width': jqContent.width(),
                                        'min-height': '0',
                                        'background': 'transparent none'
                                    });
                                } else {
                                    $(this).css({
                                        'margin-bottom': '20px',
                                        'padding': '4px 4px 0',
                                        'height': '36px',
                                        'min-height': '24px'
                                            /*,
                                            											'background-image':'url(table_column_back_tall.gif)'*/
                                    });
                                }
                            });
                            $('.swlTblSummary').css({ 'margin': '-11px 0 8px -7px', 'padding-top': '0', 'display': 'none' });
                        } else {
                            jqCanvas.css({
                                'width': opts.width + 'px',
                                'height': opts.height + 'px',
                                'border': '1px solid #ccc'
                            });
                            jqContent.css({
                                'width': (parseInt(opts.width, 10) - 20) + 'px',
                                'height': (jqCanvas.height() - 10) + 'px',
                                'padding': '10px'
                            });
                            jqTabCon.css({ 'height': jqContent.height() - jqStatus.height() - jqContentHdr.height() - 10 + 'px' });
                            jqTblCon.css({
                                'width': (jqContent.width() - 2) + 'px',
                                'height': jqContent.height() - jqStatus.height() - jqContentHdr.height() - 10 + 'px'
                            });
                            jqCanvas.find('.swlTable').width(jqTabCon.width());
                            if (jqHeader.length !== 0) {
                                jqHeader.css({ 'width': opts.width + 'px', 'margin': '0 0 -1px 0' });
                            }
                            $('.pageSetting').css({ 'left': opts.width - 20 });
                        }
                        // special handling for IE7 and Linux Firefox 3
                        if (bw.ie && (parseInt(bw.version) == 7 || parseInt(bw.version) == 6)) {
                            if (switchSkin) {
                                jqContent.css('width', jqCanvas.width() - 15);
                            } else if (opts.skin !== 'retro') {
                                $('.swlTabContainer').css('width', 'auto');
                            }
                            if (jqHeader.length !== 0) {
                                if (parseInt(bw.version) == 6) {
                                    jqHeader.css({ 'padding-top': '10px' });
                                } else {
                                    jqHeader.css({ 'padding-top': '0px' });
                                }
                            }
                            $('.swlTabHeader img').css({ 'top': '4px' });
                        } else if (jqHeader.length !== 0 &&
                            $.browser.mozilla && $.browser.version.substr(0, 3) === '1.9' &&
                            $(navigator)[0].platform.indexOf('Linux') !== -1) {
                            jqHeader.find('ul').css('padding-top', '5px');
                        }
                        $('.swlTable').css({ 'background-color': 'white', 'padding-left': '4px' });
                        if (opts.skin !== 'retro') {
                            jqFooter.css({ 'margin-left': '0', 'padding-top': '4px' });
                            jqFooter.width(opts.width + 'px').css({ 'background': 'transparent none' });
                        }
                        $('.swlTabFooter input').css('margin', '0 2px 1px 0');
                        $('span.ltSpan > input').css('margin-left', '0');
                        $('.swlTabFooter span.rtSpan').css('padding-right', '0');

                        // switch styling of all buttons
                        $('.button').each(function() {
                            if (!$(this).hasClass('swlRoundedCorner')) {
                                if ($(this).hasClass('roundBtn')) {
                                    $(this).removeClass('roundBtn');
                                    $('span.roundBtnEnd').remove();
                                    if (opts.skin === 'retro') {
                                        $(this).css({ 'border': '1px solid #5F6071', 'height': '22px' });
                                    } else {
                                        $(this).css({ 'border': '1px solid #CCCCCC', 'height': '20px' });
                                    }
                                }
                            }
                        });

                    } else if (opts.skin === 'nextGen') {
                        $(this).addClass('swlRoundedCorner');
                        jqCanvas.css({
                            'width': opts.ngWidth + 'px',
                            'height': opts.height + 'px',
                            'border': '1px solid #dcdcdc',
                            'box-shadow': '3px 3px 6px #dcdcdc',
                            'margin': '0 10px 6px 0'
                        });
                        jqContent.css({ 'padding': '10px 8px 0' });
                        paddingHt = 0;
                        jqContent.siblings(':visible').each(function() {
                            var $elem = $(this);
                            paddingHt += $elem.height();
                            cssVal = parseInt($elem.css('margin-top'), 10);
                            if (!isNaN(cssVal)) {
                                paddingHt += cssVal;
                            }
                            cssVal = parseInt($elem.css('margin-bottom'), 10);
                            if (!isNaN(cssVal)) {
                                paddingHt += cssVal;
                            }
                            cssVal = parseInt($elem.css('padding-top'), 10);
                            if (!isNaN(cssVal)) {
                                paddingHt += cssVal;
                            }
                            cssVal = parseInt($elem.css('padding-bottom'), 10);
                            if (!isNaN(cssVal)) {
                                paddingHt += cssVal;
                            }
                        });
                        cssVal = parseInt(jqContent.css('padding-top'), 10);
                        if (!isNaN(cssVal)) {
                            paddingHt += cssVal;
                        }
                        cssVal = parseInt(jqContent.css('padding-bottom'), 10);
                        if (!isNaN(cssVal)) {
                            paddingHt += cssVal;
                        }
                        cssVal += parseInt(jqCanvas.css('margin-bottom'), 10);
                        if (!isNaN(cssVal)) {
                            paddingHt += cssVal;
                        }
                        jqContent.height(jqCanvas.height() - paddingHt);
                        padWidth = 0
                        cssVal = parseInt(jqContent.css('padding-left'), 10);
                        if (!isNaN(cssVal)) {
                            padWidth += cssVal;
                        }
                        cssVal = parseInt(jqContent.css('padding-right'), 10);
                        if (!isNaN(cssVal)) {
                            padWidth += cssVal;
                        }
                        if (padWidth) {
                            jqContent.width(jqCanvas.width() - padWidth);
                        }

                        if (jqCanvas.data('curTabId') !== undefined) {
                            if (jqTabCon.attr('id') !== jqCanvas.data('curTabId')) {
                                jqTabCon = $('#' + jqCanvas.data('curTabId'));
                            }
                            if (jqTabCon.hasClass('swlTblContainer')) {
                                jqTblCon = jqTabCon;
                            } else {
                                jqTblCon = jqTabCon.find('.swlTblContainer');
                            }
                        }
                        if (jqTblCon.length > 0) {
                            jqTblCon.css({ 'width': (jqContent.width() - 2) + 'px' });
                            jqTblCon.find('.swlTable').width(jqTabCon.width());
                            if (!opts.stretchHeight && !opts.useSwlTable && $.browser.mozilla) {
                                jqTabCon.css('overflow-y', 'hidden');
                            } else {
                                jqTblCon.css('overflow-y', 'auto');
                            }
                        } else if (jqTabCon.length > 0) {
                            jqTabCon.css({ 'width': (jqContent.width() - 2) + 'px' });
                        }
                        if (jqContent.hasClass('swlBox')) {
                            if (opts.title !== "") {
                                if (opts.capPosition === "offset") {
                                    $(this).prepend('<span class="swlBoxTitleOffset">' + opts.title + '</span>');
                                    jqCanvas.css({ 'padding-top': '5px' });
                                } else {
                                    if (opts.theme === "") {
                                        jqContent.parent('.trc').css({
                                            "background-image": "url(tbl_trc_graybg.gif)"
                                        });
                                        jqContent.parents('.tlc').css({
                                            "background-image": "url(tbl_tlc_graybg.gif)"
                                        });
                                        jqContent.parents('.tb_line').css({
                                            "background-image": "url(tbl_tb_line_graybg.gif)"
                                        });
                                    }
                                    jqContent.parent('.trc').prepend('<div class="swlBoxTitle">' +
                                        '<div class="swlBoxTitleInset">' + opts.title + '</div></div>');
                                    jqContentHdr.css({ 'min-height': '4px', 'height': '4px', 'max-height': '4px' });
                                    jqContent.css({ 'padding-top': '0', 'height': jqContent.height() - 26 });
                                    jqCanvas.css({ 'padding-top': '20px' });
                                }
                            }
                            jqContent.css({ 'padding-bottom': '10px' });
                        }

                        $('.pageSetting').css({ 'float': 'none', 'left': opts.ngWidth - 40 + 'px' });
                        if (jqHeader.length !== 0) {
                            jqHeader.css({ 'width': jqContent.width() - 8, 'margin-left': '20px', 'margin-bottom': '-1px' }); // -8 allows for rounded corner image
                            if (jqContent.hasClass('swlBox')) {
                                jqHeader.css({ 'background-image': 'none' });
                            } else {
                                jqHeader.css({ 'background': 'transparent url(tabBg.gif) repeat-x scroll center bottom' });
                            }
                            if ($('#drillDownDiv').length > 0) {
                                jqHeader.css({ 'margin-top': '10px' });
                            }
                        }

                        jqCanvas.find('.swlTable').each(function() {
                            $(this).css('background-color', 'transparent');
                            $(this).find('.swlTblHdrRow td').css('border-bottom', 'transparent');
                        });

                        // drop the buttons below the table
                        jqFooter.css({
                            'width': jqCanvas.width() - 10,
                            'margin': '0',
                            'padding-top': '0',
                            'background': 'transparent none',
                            'left': '0'
                        });
                        if (jqContent.hasClass('swlBox') && opts.title !== "") {
                            if (opts.capPosition === "offset") {
                                jqFooter.css({ 'margin-top': '15px' });
                            } else {
                                jqFooter.css({ 'margin-top': '0' });
                            }
                        }

                        // adjust tab container height - less content padding and status padding
                        paddingHt = 0;
                        cssVal = parseInt(jqContent.css('padding-top'), 10);
                        if (!isNaN(cssVal)) {
                            paddingHt += cssVal;
                        }
                        cssVal = parseInt(jqContent.css('padding-bottom'), 10);
                        if (!isNaN(cssVal)) {
                            paddingHt += cssVal;
                        }
                        jqTabCon.siblings(':visible').each(function() {
                            var $elem = $(this);
                            if ($elem.attr('id') === jqTabCon.filter(':visible').attr('id')) {
                                return 1;
                            }
                            paddingHt += $elem.height();
                            cssVal = parseInt($elem.css('padding-top'), 10);
                            if (!isNaN(cssVal)) {
                                paddingHt += cssVal;
                            }
                            cssVal = parseInt($elem.css('padding-bottom'), 10);
                            if (!isNaN(cssVal)) {
                                paddingHt += cssVal;
                            }
                            cssVal = parseInt($elem.css('margin-top'), 10);
                            if (!isNaN(cssVal)) {
                                paddingHt += cssVal;
                            }
                            cssVal = parseInt($elem.css('margin-bottom'), 10);
                            if (!isNaN(cssVal)) {
                                paddingHt += cssVal;
                            }
                        });
                        jqTabCon.height(jqContent.height() - paddingHt);

                        //jqFooter.find('.swlTabFooter input').css( 'margin','0 0 1px 1em' );
                        $('span.rtSpan').css('padding-right', '.8em');

                        // special handling for IE7 and Linux Firefox 3
                        $.each($.browser, function(i) {
                            if (bw.ie && (parseInt(bw.version) == 7)) {
                                $('.pageSetting').css({ 'left': opts.ngWidth - xDelta + 'px' });
                                $('.swlHeader').css({ 'margin-top': '10px' });
                                jqCanvas.find('.swlTabContainer').css({
                                    'width': opts.ngWidth - xDelta,
                                    'height': opts.height - 60,
                                    'overflow-y': 'auto'
                                });
                                jqCanvas.css({
                                    'width': opts.ngWidth - 20,
                                    'height': opts.height - 10,
                                    'border': 'none'
                                });
                                if (jqContent.hasClass('swlBox') && opts.title !== "" && opts.capPosition === "inset") {
                                    jqContent.css({
                                        'width': opts.ngWidth - xDelta,
                                        'height': opts.height - 45,
                                        'max-height': opts.height - 45
                                    });
                                } else {
                                    jqContent.css({
                                        'width': opts.ngWidth - xDelta,
                                        'height': opts.height - 20,
                                        'max-height': opts.height - 20
                                    });
                                }
                                jqFooter.css({ 'width': jqContent.width(), 'clear': 'both' });
                                if (jqHeader.length !== 0) {
                                    jqHeader.css({
                                        'width': jqContent.width(),
                                        'margin-left': '15px',
                                        'padding-top': '0'
                                    });
                                }
                                jqCanvas.find('.swlTabHeader img').css({ 'top': '4px' });
                            } else if (bw.ie && (parseInt(bw.version) == 6)) {
                                $('.pageSetting').css({ 'left': opts.ngWidth - 40 + 'px' });
                                jqCanvas.find('.swlTable tbody').css({
                                    'height': opts.height - jqContentHdr.height() - 60,
                                    'width': opts.ngWidth - 60,
                                    'max-width': opts.ngWidth - 60
                                });
                                jqCanvas.find('.swlTabContainer').css({
                                    'height': opts.height - 40,
                                    'width': opts.ngWidth - 50
                                });
                                jqContent.css({
                                    'width': opts.ngWidth - 50,
                                    'max-width': opts.ngWidth - 50,
                                    'height': opts.height - 30,
                                    'max-height': opts.height - 30
                                });
                                jqCanvas.css({
                                    'width': opts.ngWidth - 20,
                                    'max-width': opts.ngWidth - 20,
                                    'height': opts.height - 20,
                                    'border': 'none'
                                });
                                if (jqHeader.length !== 0) {
                                    jqHeader.css({ 'margin-left': '10px' });
                                    jqHeader.css({ 'max-height': '22px' });
                                }
                                // align tabs container with top of jqContent by reducing margin between boxes
                                jqHeader.find('ul').css({ 'margin-bottom': '-7px' });
                                // eliminate margin for the tabs
                                jqHeader.find('ul li').css({ 'margin': '0' });
                                jqFooter.css({ 'width': jqContent.width(), 'clear': 'both' });
                                jqCanvas.find('.swlTabHeader img').css({ 'top': '4px' });
                                $('.pagination').css({ 'padding-top': '8px' });
                            } else if (jqHeader.length !== 0 &&
                                $.browser.mozilla && $.browser.version.substr(0, 3) === '1.9' &&
                                $(navigator)[0].platform.indexOf('Linux') !== -1) {
                                jqHeader.find('ul').css({ 'padding-top': '5px' });
                            }
                        });

                        // apply rounded corners to all buttons
                        $('.button').each(function() {
                            if (!$(this).hasClass('swlRoundedCorner')) {
                                $(this).addClass('swlRoundedCorner');
                            }
                        });
                    }

                    if (opts.skin !== 'retro') {
                        // adjust table height and width
                        if (jqCanvas.data('curTabId') !== undefined) {
                            resize(jqTabCon.attr('id'));
                        } else {
                            // this is the case when the page is first loaded, so adjust for all browsers
                            jqTabCon.find('.swlTable tbody').each(function() {
                                if (!opts.useSwlTable && $.browser.mozilla) {
                                    jqThead = $(this).siblings('thead');
                                    jqTfoot = $(this).siblings('tfoot');
                                } else {
                                    jqThead = $('#' + $(this).parents('.swlTblContainer').attr('id') + '_tblHd');
                                    //alert("jqThead id: " + jqThead.attr('id'));
                                    jqTfoot = $('#' + $(this).parents('.swlTblContainer').attr('id') + '_tblFoot');
                                }
                                if (jqThead.length > 0) {
                                    if (jqTfoot.length > 0) {
                                        $(this).height(jqTabCon.height() - jqThead.height() - jqTfoot.height());
                                        jqTfoot.width(jqTabCon.width() - 8);
                                    } else {
                                        $(this).height(jqTabCon.height() - jqThead.height());
                                    }
                                    jqThead.width(jqTabCon.width() - 8);
                                }
                            });
                        }
                        if (opts.useSwlTable || !$.browser.mozilla) {
                            if (opts.stretchHeight) {
                                $('.swlTblContainer').css({ 'overflow-y': 'hidden' });
                            } else {
                                $('.swlTblContainer').css({ 'overflow-y': 'auto' });
                            }
                        }
                        // update the column width if we use swlTable plugin
                        jqTabCon.filter(":visible").each(function() {
                            var tblCtrl = $(this).data('tblCtrl');
                            if (tblCtrl && tblCtrl.ctxData && tblCtrl.ctxData.hdrs) {
                                $(this).swlTable(tblCtrl).resizeCb();
                                return false;
                            }
                        });
                    }
                });
                break;

                /*
                 * set the current tab and tab content based on the cookie value -
                 * if none is stored in the cookie, or if the value does not match
                 * any tab ids from the current page (it's from another page) or
                 * if it matches a disabled tab, set the first enabled tab active.
                 *
                 */
            case "setTab":
                var swlCurTabId;
                var foundTabId = false;

                if (opts.skin === "retro") {
                    break;
                }

                var tabDiv = $(this).find('#tabs').eq(0);
                if (tabDiv.length === 0) {
                    tabDiv = $('#header > #tabs').eq(0);
                    if (tabDiv.length === 0) {
                        tabDiv = $(this).siblings(".swlHeader").find('#tabs').eq(0);
                    }
                }

                // check if there is stored active tab ID
                //swlCurTabId = getCookie(scrlTblTabCookie);
                swlCurTabId = getCookie(opts.activeTabCookie);
                if (swlCurTabId !== null && swlCurTabId !== "undefined") {
                    $(this).find('.swlTabContainer').each(function() {
                        if (this.id === swlCurTabId && $(this).css('display') !== "none") {
                            var tabCtrl = tabDiv.find('#' + this.id + '_trigger');
                            if (!tabCtrl.hasClass('swlTabDisabled')) {
                                foundTabId = true;
                                return false;
                            }
                        }
                    });
                }
                if (!foundTabId) {
                    if ($(this).find('.swlTabContainer').length > 0) {
                        $(this).find('.swlTabContainer').each(function() {
                            var tabCtrl = tabDiv.find('#' + this.id + '_trigger');
                            if (!tabCtrl.hasClass('swlTabDisabled')) {
                                swlCurTabId = this.id;
                                foundTabId = true;
                                return false;
                            }
                        });
                    }
                }
                if (foundTabId) {
                    $(this).data('curTabId', swlCurTabId);
                    $('#' + swlCurTabId + '_trigger').click();
                }

                break;

            default:
                break;

        }

        return this;

    };

    $.fn.stylize.defaults = {
        type: 'none', // tabbed, captioned, expando, button, table, or none
        skin: 'retro', // retro, classic, or nextGen (classic and nextGen are tabbed, nextGen is rounded)
        theme: '', // default (empty string) or "gray" or "yellow"
        width: '1000', // default swlContentContainer width for classic skin
        height: '360', // default swlContentContainer height for classic skin
        ngWidth: '790', // default swlContentContainer width for nextGen skin
        createHdr: true, // control header area creation
        createFtr: true, // control footer area creation
        contentHdrHeight: '30', // default height for header are within content area (e.g., filter container)
        pageHeaderHeight: '24', // default height for page header
        statusHeight: '20', // default height for status area within content area
        title: '', // for tab, caption, etc.
        help: false, // include help icon in popup
        capPosition: 'inset', // caption position - inset = within tab or box, offset for box only
        topBar: false, // add topBar div to page layout
        drillDown: false, // add drillDown div to page layout
        folderBar: false, // add folderBar to div within tab or box
        refresh: false, // add refresh control per refreshType: auto - pause/play; static - refresh button only
        refreshCb: null, // add refresh callback
        refreshType: 'auto', // 'auto' - auto-refresh; 'static' - single 'on demand' refresh; 'linked' - shared refresh of multiple tables
        resize: true, // adjust layout on resize events
        footer: '', // html for footer (buttons, etc.)
        msg: '', // html for popups (confirm, blockUI, etc.)
        filterHtml: '', // html for filter droplist (includes select, name, id, event handler, etc.)
        filterOpts: '', // html for filter select options (excludes select)
        name: '', // name applied to search input for tooltip generation
        ctxHandler: null, // handler for tabify, boxify, setTable - passed a tabCtx object
        showTabs: true, // set false to hide tabs (.swlHeader)
        tabDisable: false, // disable this tab - click handler won't be set, hover appearance is modified
        info: null, // handler for info icon click
        paginate: false, // true to display pagination controls
        tblHdrs: '', // html for table column headers
        pgOpts: null, // page initialization data for tables
        css: null, // css object to apply to popups created via blockUI
        msgCss: null, // css object to apply to statusMsg area within popup
        fetchNow: false, // fetch table data upon initialization
        timeout: 0, // timeout passed to blockUI calls
        closeIcon: false, // add a close icon to popup window
        fEvtHandler: null, // default handler for events generated within footer
        eventHandler: null, // callback to set event handlers for popup contents
        dataHandler: null, // callback to handle data object (specific to application)
        callDispatch: false, // setClickHandler will call snwlCtxDispatch for elems of class "swlEvent*"
        callEventHandler: false, // setClickHandler will call eventHandler for elems of class "swlEvent*"
        multiFrame: true, // support SonicWall-specific multiframe layout
        activeTabCookie: 7433, // SCRL_TAB_COOKIE from cookies.js
        useSwlTable: true, // page uses swlTable plugin to provide cross-browser table body scrolling
        stretchWidth: true, // stretch width to available window width (overrides ngWidth)
        stretchHeight: false, // stretch height to available window height
        afterComplete: null, // callback to handle data after "oncomplete"
        parentContainerId: null, // if this tab folder is contained inside a parent container object, supply the parent id here
        noFilterControl: false, // enable full stretch filter bar without the control buttons
        noPageSettings: false // disable settings icon at page top-right
    };

})(jQuery);


function swlIsFooter(evt) {
    return $(evt.currentTarget).parents('.swlFooter').length > 0;
}

function swlSetHdrButtonBar(options) {
    var htmlStr = '<div id="hdrLineWrapper">';
    var defaults = {
        accept: true,
        cancel: true,
        refresh: false,
        status: false,
        custom: null
    };
    var buttons = $.extend({}, defaults, options || {});

    htmlStr += '<div class="swlHdrLineDark" style="margin-top:12px"></div>';
    htmlStr += '<div class="swlHdrButtonBar">';
    if (buttons.accept === true) {
        htmlStr += '<input class="applyButton" type="button" value="Apply" name="applyButt" onclick="applyChanges();" ';
        htmlStr += 'title="Apply changes to this page" id="applyButt" width="74" height="21" >';
    }
    if (buttons.cancel === true) {
        htmlStr += '<input value="Cancel" name="cancelButt" style="right:34px;" onclick="cancelChanges();" ';
        htmlStr += 'title="Cancel changes to this page" class="button" type="button" >';
    }
    if (buttons.refresh === true) {
        htmlStr += '<input value="Refresh" name="refresh" onclick="doRefresh();" class="button" type="button" >';
    }
    if (buttons.status === true) {
        htmlStr += '<span class="folderBar5">';
        htmlStr += '<img id="commonStatusBtn" src="clear.gif" class="commonStatusBtnOK">';
        htmlStr += '</span>';
    }
    if (buttons.custom !== null) {
        htmlStr += buttons.custom;
    }
    htmlStr += '</div><div class="swlHdrLineDark"></div>';
    htmlStr += '</div>';

    $('#pageHeader').after(htmlStr);

}


function pausePageRefresh() {
    var tabCtx = {
        opts: {
            closeIcon: true,
            title: "Data Retrieval Suspended",
            popupHtml: "<span>Data Retrieval will occur only in the new tab or window</span><br><br>" +
                "<span>(Press Play to restart Data Retrieval)</span>",
            css: { top: '40%', left: '30%' }
        }
    };
    if ($("#commonPauseBtn").length > 0) {
        $("#commonPauseBtn").click();
        $("#commonPauseBtn").snwlCtxDispatch(tabCtx);
    } else if ($(".swlRefresh").length > 0) {
        if (isXhrRefresh === true) {
            $(".swlRefresh").snwlCtxDispatch(tabCtx);
        }
    }
}