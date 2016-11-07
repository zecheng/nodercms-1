angular.module("nodercms", ["ngAnimate", "ipCookie", "ui.router", "ngFileUpload", "angular-img-cropper", "controllers", "services", "directives", "filters", "views"]).config(["$stateProvider", "$urlRouterProvider", "$locationProvider", "$httpProvider", function (e, t, n, a) {
    "use strict";
    a.defaults.headers.common = {"content-type": "application/json;charset=utf-8"}, a.interceptors.push("authorityInterceptor"), n.html5Mode(!0), t.otherwise(function (e) {
        e.get("$state").go("main")
    }), e.state("install", {
        url: "^/admin/install",
        controller: "install",
        templateProvider: ["$templateCache", function (e) {
            return e.get("install.view.html")
        }],
        resolve: {
            checkInstallResolve: ["checkInstallResolve", function (e) {
                return e.leaveToSignInOrNone()
            }]
        }
    }).state("signIn", {
        url: "^/admin/sign-in",
        controller: "signIn",
        templateProvider: ["$templateCache", function (e) {
            return e.get("sign-in.view.html")
        }],
        resolve: {
            checkInstallResolve: ["checkInstallResolve", function (e) {
                return e.enterToInstallOrNone()
            }]
        }
    }).state("main", {
        url: "^/admin", controller: "main", templateProvider: ["$templateCache", function (e) {
            return e.get("main.view.html")
        }], resolve: {account: "account"}
    }).state("main.features", {
        url: "^/admin/features",
        controller: "features",
        templateProvider: ["$templateCache", function (e) {
            return e.get("features.view.html")
        }],
        resolve: {
            checkAuth: ["checkAuthResolve", function (e) {
                return e("features", "read")
            }]
        }
    }).state("main.features.create", {
        url: "^/admin/features/:model/create",
        controller: "featuresChange",
        templateProvider: ["$templateCache", function (e) {
            return e.get("features-change.view.html")
        }],
        resolve: {
            checkAuth: ["checkAuthResolve", function (e) {
                return e("features", "edit")
            }]
        }
    }).state("main.features.update", {
        url: "^/admin/features/:model/feature/:feature",
        controller: "featuresChange",
        templateProvider: ["$templateCache", function (e) {
            return e.get("features-change.view.html")
        }],
        resolve: {
            checkAuth: ["checkAuthResolve", function (e) {
                return e("features", "edit")
            }]
        }
    }).state("main.notFoundContents", {
        url: "^/admin/contents", templateProvider: ["$templateCache", function (e) {
            return e.get("not-fount-contents.view.html")
        }], resolve: {
            checkAuth: ["checkAuthResolve", function (e) {
                return e("contents", "read")
            }]
        }
    }).state("main.contents", {
        url: "^/admin/contents/category/:category",
        controller: "contents",
        templateProvider: ["$templateCache", function (e) {
            return e.get("contents.view.html")
        }],
        resolve: {
            checkAuth: ["checkAuthResolve", function (e) {
                return e("contents", "read")
            }]
        }
    }).state("main.contents.create", {
        url: "^/admin/contents/category/:category/create",
        controller: "contentChange",
        templateProvider: ["$templateCache", function (e) {
            return e.get("content-change.view.html")
        }],
        resolve: {
            checkAuth: ["checkAuthResolve", function (e) {
                return e("contents", "edit")
            }]
        }
    }).state("main.contents.update", {
        url: "^/admin/contents/category/:category/content/:content",
        controller: "contentChange",
        templateProvider: ["$templateCache", function (e) {
            return e.get("content-change.view.html")
        }],
        resolve: {
            checkAuth: ["checkAuthResolve", function (e) {
                return e("contents", "edit")
            }]
        }
    }).state("main.trash", {
        url: "^/admin/contents/trash",
        controller: "trash",
        templateProvider: ["$templateCache", function (e) {
            return e.get("trash.view.html")
        }],
        resolve: {
            checkAuth: ["checkAuthResolve", function (e) {
                return e("contents", "read")
            }]
        }
    }).state("main.notFoundPages", {
        url: "^/admin/pages", templateProvider: ["$templateCache", function (e) {
            return e.get("not-found-pages.view.html")
        }], resolve: {
            checkAuth: ["checkAuthResolve", function (e) {
                return e("pages", "read")
            }]
        }
    }).state("main.pages", {
        url: "^/admin/pages/:page",
        controller: "pageChange",
        templateProvider: ["$templateCache", function (e) {
            return e.get("page-change.view.html")
        }],
        resolve: {
            checkAuth: ["checkAuthResolve", function (e) {
                return e("pages", "read")
            }]
        }
    }).state("main.media", {
        url: "^/admin/media",
        controller: "media",
        templateProvider: ["$templateCache", function (e) {
            return e.get("media.view.html")
        }],
        resolve: {
            checkAuth: ["checkAuthResolve", function (e) {
                return e("media", "read")
            }]
        }
    }).state("main.account", {
        url: "^/admin/account",
        controller: "account",
        templateProvider: ["$templateCache", function (e) {
            return e.get("account.view.html")
        }],
        resolve: {
            checkAuth: ["checkAuthResolve", function (e) {
                return e("account", "read")
            }]
        }
    }).state("main.siteInfo", {
        url: "^/admin/setting/site-info",
        controller: "siteInfo",
        templateProvider: ["$templateCache", function (e) {
            return e.get("site-info.view.html")
        }],
        resolve: {
            checkAuth: ["checkAuthResolve", function (e) {
                return e("siteInfo", "read")
            }]
        }
    }).state("main.categories", {
        url: "^/admin/setting/categories",
        controller: "categories",
        templateProvider: ["$templateCache", function (e) {
            return e.get("categories.view.html")
        }],
        resolve: {
            checkAuth: ["checkAuthResolve", function (e) {
                return e("categories", "read")
            }]
        }
    }).state("main.categories.create", {
        url: "^/admin/setting/categories/create",
        controller: "categoriesChange",
        templateProvider: ["$templateCache", function (e) {
            return e.get("categories-change.view.html")
        }],
        resolve: {
            checkAuth: ["checkAuthResolve", function (e) {
                return e("categories", "edit")
            }]
        }
    }).state("main.categories.update", {
        url: "^/admin/setting/categories/:_id",
        controller: "categoriesChange",
        templateProvider: ["$templateCache", function (e) {
            return e.get("categories-change.view.html")
        }],
        resolve: {
            checkAuth: ["checkAuthResolve", function (e) {
                return e("categories", "edit")
            }]
        }
    }).state("main.contentModels", {
        url: "^/admin/setting/content-models",
        controller: "contentModels",
        templateProvider: ["$templateCache", function (e) {
            return e.get("content-models.view.html")
        }],
        resolve: {
            checkAuth: ["checkAuthResolve", function (e) {
                return e("contentModels", "read")
            }]
        }
    }).state("main.contentModels.create", {
        url: "^/admin/setting/content-models/create",
        controller: "contentModelChange",
        templateProvider: ["$templateCache", function (e) {
            return e.get("content-model-change.view.html")
        }],
        resolve: {
            checkAuth: ["checkAuthResolve", function (e) {
                return e("contentModels", "edit")
            }]
        }
    }).state("main.contentModels.update", {
        url: "^/admin/setting/content-models/:_id",
        controller: "contentModelChange",
        templateProvider: ["$templateCache", function (e) {
            return e.get("content-model-change.view.html")
        }],
        resolve: {
            checkAuth: ["checkAuthResolve", function (e) {
                return e("contentModels", "edit")
            }]
        }
    }).state("main.featureModels", {
        url: "^/admin/setting/feature-models",
        controller: "featureModels",
        templateProvider: ["$templateCache", function (e) {
            return e.get("feature-models.view.html")
        }],
        resolve: {
            checkAuth: ["checkAuthResolve", function (e) {
                return e("featureModels", "read")
            }]
        }
    }).state("main.featureModels.create", {
        url: "^/admin/setting/feature-models/create",
        controller: "featureModelChange",
        templateProvider: ["$templateCache", function (e) {
            return e.get("feature-model-change.view.html")
        }],
        resolve: {
            checkAuth: ["checkAuthResolve", function (e) {
                return e("featureModels", "edit")
            }]
        }
    }).state("main.featureModels.update", {
        url: "^/admin/setting/feature-models/:_id",
        controller: "featureModelChange",
        templateProvider: ["$templateCache", function (e) {
            return e.get("feature-model-change.view.html")
        }],
        resolve: {
            checkAuth: ["checkAuthResolve", function (e) {
                return e("featureModels", "edit")
            }]
        }
    }).state("main.roles", {
        url: "^/admin/setting/roles",
        controller: "roles",
        templateProvider: ["$templateCache", function (e) {
            return e.get("roles.view.html")
        }],
        resolve: {
            checkAuth: ["checkAuthResolve", function (e) {
                return e("roles", "read")
            }]
        }
    }).state("main.roles.create", {
        url: "^/admin/setting/roles/create",
        controller: "rolesChange",
        templateProvider: ["$templateCache", function (e) {
            return e.get("roles-change.view.html")
        }],
        resolve: {
            checkAuth: ["checkAuthResolve", function (e) {
                return e("roles", "edit")
            }]
        }
    }).state("main.roles.update", {
        url: "^/admin/setting/roles/:_id",
        controller: "rolesChange",
        templateProvider: ["$templateCache", function (e) {
            return e.get("roles-change.view.html")
        }],
        resolve: {
            checkAuth: ["checkAuthResolve", function (e) {
                return e("roles", "edit")
            }]
        }
    }).state("main.adminUsers", {
        url: "^/admin/setting/admin-users",
        controller: "adminUsers",
        templateProvider: ["$templateCache", function (e) {
            return e.get("admin-users.view.html")
        }],
        resolve: {
            checkAuth: ["checkAuthResolve", function (e) {
                return e("adminUsers", "read")
            }]
        }
    }).state("main.adminUsers.create", {
        url: "^/admin/setting/admin-users/create",
        controller: "adminUsersChange",
        templateProvider: ["$templateCache", function (e) {
            return e.get("admin-users-change.view.html")
        }],
        resolve: {
            checkAuth: ["checkAuthResolve", function (e) {
                return e("adminUsers", "edit")
            }]
        }
    }).state("main.adminUsers.update", {
        url: "^/admin/setting/admin-users/:_id",
        controller: "adminUsersChange",
        templateProvider: ["$templateCache", function (e) {
            return e.get("admin-users-change.view.html")
        }],
        resolve: {
            checkAuth: ["checkAuthResolve", function (e) {
                return e("adminUsers", "edit")
            }]
        }
    })
}]).run(["checkSignIn", "$templateCache", function (e) {
    e()
}]), angular.module("controllers", []), angular.module("services", []), angular.module("directives", []), angular.module("filters", []), angular.module("views", []), angular.module("controllers").controller("account", ["$scope", "$rootScope", "$state", "$stateParams", "$http", "account", function (e, t, n, a, i, o) {
    "use strict";
    e.transmitting = !0, e.email = "", e.oldEmail = "", e.nickname = "", e.password = "", e.confirmpwd = "", e.role = "", e.editAuth = !1, o.auths().then(function (t) {
        e.editAuth = t.account.edit
    }, function () {
        e.$emit("notification", {type: "danger", message: "读取权限失败"})
    }), o.get().then(function (t) {
        e.email = t.email, e.oldEmail = t.email, e.nickname = t.nickname, e.role = t.role, e.transmitting = !1
    }, function () {
        e.$emit("notification", {type: "danger", message: "帐号更新失败"})
    }), e.update = function () {
        e.transmitting = !0;
        var t = {nickname: e.nickname, email: e.email, role: e.role._id};
        e.password && (t.password = e.password), i.put("/api/account", t).then(function () {
            o.reset(), e.$emit("mainUserUpdate"), e.transmitting = !1, e.$emit("notification", {
                type: "success",
                message: "帐号更新成功"
            })
        }, function () {
            e.transmitting = !1, e.$emit("notification", {type: "danger", message: "帐号更新失败"})
        })
    }
}]), angular.module("controllers").controller("adminUsersChange", ["$scope", "$state", "$stateParams", "$http", function (e, t, n, a) {
    "use strict";
    e.transmitting = !1, e.action = "create", e._id = n._id, e.checkEmailing = !1, e.inputing = !1, e.email = "", e.oldEmail = "", e.nickname = "", e.password = "", e.confirmpwd = "", e.roles = [], e.role = "", async.parallel({
        roles: function (e) {
            a.get("/api/roles").then(function (t) {
                var n = t.data, a = _.reject(n, function (e) {
                    return _.find(e.authorities, function (e) {
                        return 1e5 === e
                    })
                });
                e(null, a)
            }, function () {
                e("获取角色列表失败")
            })
        }, user: function (t) {
            n._id ? (e.action = "update", a.get("/api/admin-users/" + n._id).then(function (e) {
                t(null, e.data)
            }, function () {
                t("获取用户失败")
            })) : t(null)
        }
    }, function (a, i) {
        return a ? e.$emit("notification", {
            type: "danger",
            message: a
        }) : (e.roles = i.roles, void(n._id && i.user ? (e.oldEmail = angular.copy(i.user.email), e.email = i.user.email, e.nickname = i.user.nickname, e.role = i.user.role._id) : n._id && t.go("main.adminUsers")))
    }), e.saveUser = function () {
        e.transmitting = !0;
        var i = {email: e.email.toLowerCase(), nickname: e.nickname, role: e.role};
        e.password && (i.password = e.password), n._id ? (i._id = n._id, a.put("/api/admin-users/" + n._id, i).then(function () {
            e.$emit("notification", {
                type: "success",
                message: "保存用户成功"
            }), e.$emit("mainUserUpdate"), t.go("main.adminUsers", null, {reload: "main.adminUsers"})
        }, function () {
            e.$emit("notification", {type: "danger", message: "保存用户失败"})
        })) : a.post("/api/admin-users", i).then(function () {
            e.$emit("notification", {
                type: "success",
                message: "创建用户成功"
            }), e.$emit("mainUserUpdate"), t.go("main.adminUsers", null, {reload: "main.adminUsers"})
        }, function () {
            e.$emit("notification", {type: "danger", message: "创建用户失败"})
        })
    }
}]), angular.module("controllers").controller("adminUsers", ["$scope", "$timeout", "$state", "$http", "account", function (e, t, n, a, i) {
    "use strict";
    e.transmitting = !1, e.users = [], e.deleteUserId = "", e.editAuth = !1, i.auths().then(function (t) {
        e.editAuth = t.adminUsers.edit
    }, function () {
        e.$emit("notification", {type: "danger", message: "读取权限失败"})
    }), a.get("/api/admin-users").then(function (t) {
        var n = t.data;
        _.forEach(n, function (e) {
            var t = _.find(_.get(e, "role.authorities"), function (e) {
                return 1e5 === e
            });
            t && (e.isSupAdmin = !0)
        }), e.users = t.data
    }, function () {
        e.$emit("notification", {type: "danger", message: "读取后台用户失败"})
    }), e.deleteUser = function () {
        e.transmitting = !0, a["delete"]("/api/admin-users/" + e.deleteUserId).then(function () {
            for (var t = 0; t < e.users.length; t++)if (e.deleteUserId === e.users[t]._id)return e.users.splice(t, 1), $("#deleteModal").modal("hide"), e.transmitting = !1, e.$emit("notification", {
                type: "success",
                message: "删除用户成功"
            })
        }, function () {
            e.$emit("notification", {type: "danger", message: "删除用户失败"})
        })
    }
}]), angular.module("controllers").controller("categoriesChange", ["$scope", "$state", "$stateParams", "$http", function (e, t, n, a) {
    "use strict";
    e.transmitting = !0, e.action = "create", e._id = n._id, e.inputing = !1, e.checkDirectorying = !1, e.types = [{
        type: "channel",
        name: "频道"
    }, {type: "column", name: "栏目"}, {type: "page", name: "单页"}, {
        type: "link",
        name: "链接"
    }], e.models = [], e.viewfiles = [], e.type = "column", e.name = "", e.directory = "", e.pageSize = 15, e.url = "", e.oldPath = "", e.prePath = "", e.path = "", e.sort = 0, e.isShow = !0, e.model = "", e.views = {
        layout: "",
        channel: "",
        column: "",
        content: "",
        page: ""
    }, e.isEdit = !0, e.keywords = "", e.description = "", e._id = n._id ? n._id : "null", e.translateType = function (t) {
        return _.find(e.types, {type: t}).name
    }, a.get("/api/models", {params: {type: "content"}}).then(function (t) {
        e.models = t.data
    }, function () {
        e.$emit("notification", {type: "danger", message: "读取内容模型失败"})
    }), async.parallel({
        viewfiles: function (e) {
            a.get("/api/views").then(function (t) {
                e(null, t.data)
            }, function (t) {
                e(t.data)
            })
        }, category: function (i) {
            n._id ? (e.action = "update", a.get("/api/categories/" + n._id).then(function (e) {
                var n = e.data;
                n ? i(null, n) : t.go("main.categories")
            }, function (e) {
                i(e.data)
            })) : i(null)
        }
    }, function (t, n) {
        if (t)return e.$emit("notification", {type: "danger", message: "获取分类失败"}), e.transmitting = !0, !1;
        if (e.viewfiles = n.viewfiles, e.views.layout = "layout-default", e.views.channel = "channel-default", e.views.column = "column-default", e.views.content = "content-default", e.views.page = "page-default", n.category) {
            e.type = n.category.type, e.name = n.category.name, e.directory = /[A-z0-9\_\-]+$/.exec(n.category.path)[0], e.oldPath = angular.copy(n.category.path);
            var a = /^\/[A-z0-9\_\-\/]+(?=[\/])/.exec(n.category.path);
            e.prePath = a ? a[0] : "", n.category.mixed && (e.pageSize = n.category.mixed.pageSize), e.isShow = n.category.isShow, e.sort = n.category.sort, e.model = n.category.model && n.category.model._id || "", n.category.views && (e.views.layout = n.category.views.layout || "layout-default", e.views.channel = n.category.views.channel || "channel-default", e.views.column = n.category.views.column || "column-default", e.views.content = n.category.views.content || "content-default", e.views.page = n.category.views.page || "page-default"), e.keywords = n.category.keywords || "", e.description = n.category.description || "", n.category.mixed && (e.url = n.category.mixed.url || "", e.isEdit = _.isEmpty(n.category.mixed) ? !0 : n.category.mixed.isEdit)
        }
        e.transmitting = !1
    }), e.saveCategory = function () {
        e.transmitting = !0;
        var i = {type: e.type, name: e.name, isShow: e.isShow, sort: e.sort};
        switch (e.type) {
            case"channel":
                i.path = "/" + e.directory.toLowerCase(), i["views.layout"] = e.views.layout, i["views.channel"] = e.views.channel, i.keywords = e.keywords, i.description = e.description;
                break;
            case"column":
                i.model = e.model, e.prePath ? i.path = e.prePath + "/" + e.directory.toLowerCase() : i.path = "/" + e.directory.toLowerCase(), i["mixed.pageSize"] = e.pageSize, i["views.layout"] = e.views.layout, i["views.column"] = e.views.column, i["views.content"] = e.views.content, i.keywords = e.keywords, i.description = e.description;
                break;
            case"page":
                e.prePath ? i.path = e.prePath + "/" + e.directory.toLowerCase() : i.path = "/" + e.directory.toLowerCase(), i["views.layout"] = e.views.layout, i["views.page"] = e.views.page, i["mixed.isEdit"] = e.isEdit, i.keywords = e.keywords, i.description = e.description;
                break;
            case"link":
                e.prePath ? i["mixed.prePath"] = e.prePath + "/" : i["mixed.prePath"] = "/", i["mixed.url"] = e.url
        }
        n._id ? (i._id = n._id, a.put("/api/categories/" + n._id, i).then(function () {
            e.$emit("notification", {
                type: "success",
                message: "保存分类成功"
            }), e.$emit("mainCategoriesUpdate"), t.go("main.categories", null, {reload: "main.categories"})
        }, function () {
            e.$emit("notification", {type: "danger", message: "保存分类失败"})
        })) : a.post("/api/categories", i).then(function () {
            e.$emit("notification", {
                type: "success",
                message: "新增分类成功"
            }), e.$emit("mainCategoriesUpdate"), t.go("main.categories", null, {reload: "main.categories"})
        }, function () {
            e.$emit("notification", {type: "danger", message: "保存分类失败"})
        })
    }
}]), angular.module("controllers").controller("categories", ["$scope", "$http", "account", function (e, t, n) {
    "use strict";
    e.transmitting = !1, e.actionTitle = "", e.deleteCategoryId = "", e.types = [{
        type: "channel",
        name: "频道"
    }, {type: "column", name: "栏目"}, {type: "page", name: "单页"}, {
        type: "link",
        name: "链接"
    }], e.categories = [], e.categoriesList = [], e.editAuth = !1, n.auths().then(function (t) {
        e.editAuth = t.categories.edit
    }, function () {
        e.$emit("notification", {type: "danger", message: "读取权限失败"})
    }), e.categoriesSort = function () {
        function t(e) {
            function t(e) {
                return _.map(e, function (e) {
                    var n = _.partition(o, function (t) {
                        return t.path ? new RegExp("^" + e.path + "/[A-z0-9-_]+$").test(t.path) : new RegExp("^" + e.path + "/$").test(t.mixed.prePath)
                    });
                    return o = n[1], _.isEmpty(n[0]) || (e.nodes = t(_.sortBy(n[0], "sort"))), e
                })
            }

            var a = _.partition(n, function (e) {
                return e.path ? 2 === e.path.split("/").length : 2 === e.mixed.prePath.split("/").length
            }), i = _.sortBy(a[0], "sort"), o = a[1], s = t(i);
            e(s)
        }

        var n = angular.copy(e.categories);
        e.categoriesList = [], t(function (t) {
            !function n(t, a) {
                _.map(t, function (i, o) {
                    var i = angular.copy(i);
                    delete i._nodes, i.indent = {"text-indent": 1.5 * a + "em"}, o == t.length - 1 && 0 != a ? i.prefix = "└ " : 0 != a && (i.prefix = "├ "), e.categoriesList.push(i), i.nodes && n(i.nodes, a + 1)
                })
            }(t, 0)
        })
    }, e.translate = function (t) {
        for (var n = 0; n < e.types.length; n++)if (t === e.types[n].type)return e.types[n].name
    }, t.get("/api/categories").then(function (t) {
        e.categories = t.data, e.categoriesSort()
    }, function () {
        e.$emit("notification", {type: "danger", message: "读取分类失败"})
    }), e.deleteModel = function () {
        e.transmitting = !0, t["delete"]("/api/categories/" + e.deleteCategoryId).success(function () {
            _.forEach(e.categories, function (t, n) {
                if (e.deleteCategoryId === t._id) {
                    e.categories.splice(n, 1);
                    var a = new RegExp("^" + t.path + "/", "i");
                    return _.forEachRight(e.categories, function (t, n) {
                        a.test(t.path) && e.categories.splice(n, 1)
                    }), !1
                }
            }), e.categoriesSort(), e.$emit("mainCategoriesUpdate"), $("#deleteModal").modal("hide"), e.transmitting = !1, e.$emit("notification", {
                type: "success",
                message: "删除分类成功"
            })
        }).error(function () {
            e.$emit("notification", {type: "danger", message: "删除分类失败"})
        })
    }
}]), angular.module("controllers").controller("contentChange", ["$scope", "$state", "$stateParams", "$http", "$timeout", "pinyin", "Upload", "$filter", function (e, t, n, a, i, o, s, r) {
    "use strict";
    e.transmitting = !1, e.action = "create", e.categoryId = n.category, e._id = n.content, e.status = "draft", e.title = "", e.oldTitle = "", e.alias = "", e.oldAlias = "", e["abstract"] = "", e.content = "", e.tags = "", e.extensions = {}, e.releaseDate = "now", e.date = r("date")(new Date, "yyyy年MM月dd日"), e.hour = r("date")(new Date, "hh"), e.minute = r("date")(new Date, "mm"), e.thumbnail = {}, e.media = [], e.disabledExtMediaAdd = {}, e.$watch("title", function (t) {
        t !== e.oldTitle ? e.alias = o(t) : e.alias = e.oldAlias
    }), $(".input-group.date").datepicker({
        format: "yyyy年mm月dd日",
        todayBtn: "linked",
        language: "zh-CN",
        autoclose: !0,
        todayHighlight: !0
    }), n.content && (e.action = "update", e.transmitting = !0, a.get("/api/contents/" + n.content, {params: {markdown: !0}}).then(function (n) {
        if (n.data) {
            var a = n.data;

            e.status = a.status, e.title = a.title, e.oldTitle = _.clone(a.title), e.alias = a.alias, e.oldAlias = _.clone(a.alias), n.data.thumbnail && (e.thumbnail._id = n.data.thumbnail._id, e.thumbnail.uploadStatus = "success", e.thumbnail.croppedImage = n.data.thumbnail.src), _.isEmpty(n.data.media) || _.map(n.data.media, function (t) {
                var n = _.get(t.fileName.match(/^.+\.(\w+)$/), 1), a = {
                    file: null,
                    fileName: t.fileName,
                    fileNameLast: n,
                    isImage: !1,
                    description: t.description,
                    src: 'http://video.youka.youmengchuangxiang.com/' + t.src,
                    _id: t._id,
                    uploadStatus: "success",
                    active: !1,
                    edited: !1
                };
                switch (n) {
                    case"jpg":
                    case"jpeg":
                    case"png":
                    case"gif":
                        a.isImage = !0
                }
                e.media.push(a)
            }), "pushed" === n.data.status && (e.date = r("date")(a.date, "yyyy年MM月dd日"), e.hour = r("date")(a.date, "HH"), e.minute = r("date")(a.date, "mm"), e.releaseDate = "current"), a["abstract"] && (e["abstract"] = a["abstract"]), a.content && (e.content = a.content), a.tags && (e.tags = a.tags.join(",")), a.extensions && (e.extensions = a.extensions, _.map(e.category.model.extensions, function (t) {
                "media" === t.type && (e.extensions[t.key] && t.mixed.limit - e.extensions[t.key].length < 1 ? e.disabledExtMediaAdd[t.key] = !0 : e.disabledExtMediaAdd[t.key] = !1)
            })), e.transmitting = !1
        } else t.go("main.contents", {category: e.$parent.category._id}, {reload: "main.contents"})
    }, function () {
        e.$emit("notification", {type: "danger", message: "获取内容失败"})
    })), e.addExtensionMedia = function (t, n) {
        e.extensions[t] = e.extensions[t] || [], e.mediaSelect({limit: n - e.extensions[t].length}, function (a) {
            e.extensions[t] = _.concat(e.extensions[t], a), n - e.extensions[t].length < 1 ? e.disabledExtMediaAdd[t] = !0 : e.disabledExtMediaAdd[t] = !1
        })
    }, e.removeExtensionsMedia = function (t, n, a) {
        _.pull(e.extensions[t], a), n - e.extensions[t].lengt < 1 ? e.disabledExtMediaAdd[t] = !0 : e.disabledExtMediaAdd[t] = !1
    }, e.saveContent = function () {
        var i = {status: e.status, category: e.$parent.category._id, title: e.title, alias: e.alias};
        if (e.thumbnail._id && (i.thumbnail = e.thumbnail._id), _.isEmpty(e.media) || (i.media = _.map(e.media, "_id")), ("" !== e["abstract"] || void 0 !== e["abstract"]) && (i["abstract"] = e["abstract"]), ("" !== e.content || void 0 !== e.content) && (i.content = e.content), "current" === e.releaseDate ? i.date = moment(e.date, "YYYY年MM月DD日").hour(e.hour).minute(e.minute).format() : "now" === e.releaseDate && (i.date = moment().format()), "" !== e.tags && void 0 !== e.tags) {
            var o = angular.copy(e.tags);
            o = o.replace(/，| /g, ","), i.tags = o.split(",")
        }
        $.isEmptyObject(e.extensions) || (i.extensions = e.extensions), n.content ? a.put("/api/contents/" + n.content, i).then(function () {
            e.$emit("notification", {
                type: "success",
                message: "修改内容成功"
            }), t.go("main.contents", {category: e.$parent.category._id}, {reload: "main.contents"})
        }) : a.post("/api/contents", i).then(function (n) {
            "draft" === e.status ? e.$emit("notification", {
                type: "success",
                message: "保存草稿成功"
            }) : "pushed" === e.status && e.$emit("notification", {
                type: "success",
                message: "发布内容成功"
            }), t.go("main.contents", {category: e.$parent.category._id}, {reload: "main.contents"})
        }, function () {
            e.$emit("notification", {type: "danger", message: "发布内容失败"})
        })
    }
}]), angular.module("controllers").controller("contentModelChange", ["$scope", "$state", "$stateParams", "$http", function (e, t, n, a) {
    "use strict";
    e.transmitting = !0, e.action = "create", e._id = n._id, e.keyFormAction = "", e.keyIndex = "", e.name = "", e.description = "", e.system = {
        thumbnail: !0,
        "abstract": !0,
        content: !0,
        tags: !0
    }, e.thumbnailSize = {width: 400, height: 300}, e.extensions = [], e.keyType = [{
        name: "文本框",
        type: "text"
    }, {name: "数字框", type: "number"}, {name: "文本域", type: "textarea"}, {name: "下拉框", type: "select"}, {
        name: "媒体",
        type: "media"
    }], e.key = {
        key: "",
        name: "",
        type: "text",
        description: "",
        mixed: {select: [], limit: 4}
    }, e.keyTypeSelect = {name: "", value: ""}, e.keyTypeSelectInvalid = {
        name: !0,
        value: !0
    }, e.keyNonUnique = !1, e.$watch("key.key", function () {
        if ("add" === e.keyFormAction)for (var t = 0; t < e.extensions.length; t++)if (e.key.key === e.extensions[t].key)return e.keyNonUnique = !0;
        e.keyNonUnique = !1
    }), $("#keyForm").on("input", "#keyTypeSelectName", function () {
        e.$apply(function () {
            e.keyTypeSelectInvalid.name = !1
        })
    }).on("blur", "#keyTypeSelectName", function () {
        e.$apply(function () {
            e.keyTypeSelect.name || (e.keyTypeSelectInvalid.name = !0)
        })
    }).on("input", "#keyTypeSelectValue", function () {
        e.$apply(function () {
            e.keyTypeSelectInvalid.value = !1
        })
    }).on("blur", "#keyTypeSelectValue", function () {
        e.$apply(function () {
            e.keyTypeSelect.value || (e.keyTypeSelectInvalid.value = !0)
        })
    }), n._id ? (e.action = "update", a.get("/api/models/" + n._id).then(function (n) {
        var a = n.data;
        a ? (e.name = a.name, e.description = a.description, e.system = a.system, a.system.thumbnail && a.mixed && a.mixed.thumbnailSize && (e.thumbnailSize = a.mixed.thumbnailSize), e.extensions = a.extensions, e.transmitting = !1) : t.go("main.contentModels")
    }, function () {
        e.$emit("notification", {type: "danger", message: "获取内容模型失败"})
    })) : e.transmitting = !1, e.keyModel = function (t, n) {
        t ? (e.keyFormAction = "edit", e.keyIndex = n, e.key = angular.copy(t)) : (e.keyFormAction = "add", e.keyForm.$setPristine(), e.keyForm.$setUntouched(), e.key = {
            key: "",
            name: "",
            type: "text",
            description: "",
            mixed: {select: [], limit: 4}
        }), $("#keyModal").modal("show")
    }, e.addKeyTypeSelect = function () {
        e.key.mixed.select = e.key.mixed.select || [], e.key.mixed.select.push(angular.copy(e.keyTypeSelect)), e.keyTypeSelect = {
            name: "",
            value: ""
        }, e.keyTypeSelectInvalid = {
            name: !0,
            value: !0
        }, e.keyForm.keyTypeSelectName.$setUntouched(), e.keyForm.keyTypeSelectValue.$setUntouched()
    }, e.deleteKeyTypeSelect = function (t) {
        e.key.mixed.select.splice(t, 1)
    }, e.deleteKey = function (t) {
        e.extensions.splice(t, 1)
    }, e.saveKey = function () {
        switch (e.key.type) {
            case"text":
            case"number":
            case"textarea":
                delete e.key.mixed.select, delete e.key.mixed.limit;
                break;
            case"select":
                delete e.key.mixed.limit;
                break;
            case"media":
                delete e.key.mixed.select
        }
        "add" === e.keyFormAction ? e.extensions.push(e.key) : "edit" === e.keyFormAction && (e.extensions[e.keyIndex] = e.key), $("#keyModal").modal("hide")
    }, e.saveModel = function () {
        e.transmitting = !0;
        var i = {type: "content", name: e.name, description: e.description, system: e.system, extensions: e.extensions};
        e.system.thumbnail && (i.mixed = i.mixed || {}, i.mixed.thumbnailSize = e.thumbnailSize), n._id ? (i._id = n._id, a.put("/api/models/" + n._id, i).success(function () {
            for (var n = 0; n < e.$parent.models.length; n++)if (i._id === e.$parent.models[n]._id)return e.$parent.models[n] = i, e.$emit("notification", {
                type: "success",
                message: "保存内容模型成功"
            }), e.$emit("mainCategoriesUpdate"), t.go("main.contentModels")
        }).error(function () {
            e.$emit("notification", {type: "danger", message: "保存内容模型失败"})
        })) : a.post("/api/models", i).success(function (n) {
            i._id = n._id, e.$parent.models.push(i), e.$emit("notification", {
                type: "success",
                message: "保存内容模型成功"
            }), e.$emit("mainCategoriesUpdate"), t.go("main.contentModels")
        }).error(function () {
            e.$emit("notification", {type: "danger", message: "保存内容模型失败"})
        })
    }
}]), angular.module("controllers").controller("contentModels", ["$scope", "$http", "account", function (e, t, n) {
    "use strict";
    e.transmitting = !1, e.models = [], e.deleteModelId = "", e.systemKey = [{
        name: "thumbnail",
        value: "缩略图"
    }, {name: "abstract", value: "摘要"}, {name: "content", value: "内容"}, {
        name: "tags",
        value: "标签"
    }], e.editAuth = !1, n.auths().then(function (t) {
        e.editAuth = t.contentModels.edit
    }, function () {
        e.$emit("notification", {type: "danger", message: "读取权限失败"})
    }), t.get("/api/models", {params: {type: "content"}}).then(function (t) {
        e.models = t.data
    }, function () {
        e.$emit("notification", {type: "danger", message: "读取内容模型失败"})
    }), e.deleteModel = function () {
        e.transmitting = !0, t["delete"]("/api/models/" + e.deleteModelId).then(function () {
            for (var t = 0; t < e.models.length; t++)if (e.deleteModelId === e.models[t]._id)return e.models.splice(t, 1), $("#deleteModal").modal("hide"), e.transmitting = !1, e.$emit("notification", {
                type: "success",
                message: "删除内容模型成功"
            })
        }, function () {
            e.$emit("notification", {type: "danger", message: "删除内容模型失败"})
        })
    }
}]), angular.module("controllers").controller("contents", ["$scope", "$state", "$stateParams", "$http", "account", function (e, t, n, a, i) {
    "use strict";
    e.transmitting = !1, e.category = {}, e.contents = [], e.currentPage = 1, e.totalPages = 0, e.deleteContentId = "", e.statusType = [{
        name: "草稿",
        value: "draft"
    }, {name: "已发布", value: "pushed"}], e.editAuth = !1, i.auths().then(function (t) {
        e.editAuth = t.contents.edit
    }, function () {
        e.$emit("notification", {type: "danger", message: "读取权限失败"})
    }), a.get("/api/categories/" + n.category).then(function (t) {
        e.category = t.data
    }), e.loadContents = function () {
        a.get("/api/contents", {
            params: {
                _id: n.category,
                deleted: !1,
                currentPage: e.currentPage,
                pageSize: 20
            }
        }).then(function (t) {
            var n = t.data;
            e.contents = n.contents, e.totalPages = n.pages
        }, function () {
            e.$emit("notification", {type: "danger", message: "读取内容列表失败"})
        })
    }, e.loadContents(), e.$watch("currentPage", function () {
        e.loadContents()
    }), e.deleteContent = function () {
        e.transmitting = !0, a["delete"]("/api/contents/" + e.deleteContentId).then(function () {
            e.loadContents(), $("#deleteModal").modal("hide"), e.transmitting = !1, e.$emit("notification", {
                type: "success",
                message: "删除内容成功"
            })
        }, function () {
            e.$emit("notification", {type: "danger", message: "删除内容失败"})
        })
    }
}]), angular.module("controllers").controller("featureModelChange", ["$scope", "$state", "$stateParams", "$http", function (e, t, n, a) {
    "use strict";
    e.transmitting = !0, e.action = "create", e._id = n._id, e.inputing = !1, e.checkCallnameing = !1, e.name = "", e.limit = 5, e.sort = 0, e.callname = "", e.oldCallname = "", e.description = "", e.system = {
        thumbnail: !0,
        title: !0,
        url: !0
    }, e.thumbnailSize = {width: 400, height: 300}, e.extensions = [], e.keyType = [{
        name: "文本框",
        type: "text"
    }, {name: "数字框", type: "number"}, {name: "文本域", type: "textarea"}, {name: "下拉框", type: "select"}, {
        name: "媒体",
        type: "media"
    }], e.key = {
        key: "",
        name: "",
        type: "text",
        select: [],
        description: "",
        mixed: {select: [], limit: 4}
    }, e.keyTypeSelect = {name: "", value: ""}, e.keyTypeSelectInvalid = {
        name: !0,
        value: !0
    }, e.keyNonUnique = !1, e.$watch("key.key", function () {
        if ("add" === e.keyFormAction)for (var t = 0; t < e.extensions.length; t++)if (e.key.key === e.extensions[t].key)return e.keyNonUnique = !0;
        e.keyNonUnique = !1
    }), $("#keyForm").on("input", "#keyTypeSelectName", function () {
        e.$apply(function () {
            e.keyTypeSelectInvalid.name = !1
        })
    }).on("blur", "#keyTypeSelectName", function () {
        e.$apply(function () {
            e.keyTypeSelect.name || (e.keyTypeSelectInvalid.name = !0)
        })
    }).on("input", "#keyTypeSelectValue", function () {
        e.$apply(function () {
            e.keyTypeSelectInvalid.value = !1
        })
    }).on("blur", "#keyTypeSelectValue", function () {
        e.$apply(function () {
            e.keyTypeSelect.value || (e.keyTypeSelectInvalid.value = !0)
        })
    }), n._id ? (e.transmitting = !0, e.action = "update", a.get("/api/models/" + n._id).then(function (n) {
        var a = n.data;
        a ? (e.name = a.name, e.description = a.description, e.limit = a.mixed.limit, e.callname = a.mixed.callname, e.oldCallname = angular.copy(e.callname), e.system = a.system, a.system.thumbnail && a.mixed && a.mixed.thumbnailSize && (e.thumbnailSize = a.mixed.thumbnailSize), e.extensions = a.extensions, e.transmitting = !1) : t.go("main.fetureModels")
    }, function () {
        e.$emit("notification", {type: "danger", message: "获取内容模型失败"})
    })) : e.transmitting = !1, e.keyModel = function (t, n) {
        t ? (e.keyFormAction = "edit", e.keyIndex = n, e.key = angular.copy(t)) : (e.keyFormAction = "add", e.keyForm.$setPristine(), e.keyForm.$setUntouched(), e.key = {
            key: "",
            name: "",
            type: "text",
            description: "",
            mixed: {select: [], limit: 4}
        }), $("#keyModal").modal("show")
    }, e.addKeyTypeSelect = function () {
        e.key.mixed.select.push(angular.copy(e.keyTypeSelect)), e.keyTypeSelect = {
            name: "",
            value: ""
        }, e.keyTypeSelectInvalid = {
            name: !0,
            value: !0
        }, e.keyForm.keyTypeSelectName.$setUntouched(), e.keyForm.keyTypeSelectValue.$setUntouched()
    }, e.deleteKeyTypeSelect = function (t) {
        e.key.mixed.select.splice(t, 1)
    }, e.deleteKey = function (t) {
        e.extensions.splice(t, 1)
    }, e.saveKey = function () {
        switch (e.key.type) {
            case"text":
            case"number":
            case"textarea":
                delete e.key.mixed.select, delete e.key.mixed.limit;
                break;
            case"select":
                delete e.key.mixed.limit;
                break;
            case"media":
                delete e.key.mixed.select
        }
        "add" === e.keyFormAction ? e.extensions.push(e.key) : "edit" === e.keyFormAction && (e.extensions[e.keyIndex] = e.key), $("#keyModal").modal("hide")
    }, e.saveModel = function () {
        e.transmitting = !0;
        var i = {
            type: "feature",
            name: e.name,
            description: e.description,
            mixed: {callname: e.callname, limit: e.limit, sort: e.sort},
            system: e.system,
            extensions: e.extensions
        };
        e.system.thumbnail && (i.mixed.thumbnailSize = e.thumbnailSize), n._id ? (i._id = n._id, a.put("/api/models/" + n._id, i).success(function () {
            for (var n = 0; n < e.$parent.models.length; n++)if (i._id === e.$parent.models[n]._id)return e.$parent.models[n] = i, e.$emit("notification", {
                type: "success",
                message: "保存推荐位成功"
            }), e.$emit("mainCategoriesUpdate"), t.go("main.featureModels")
        }).error(function () {
            e.$emit("notification", {type: "danger", message: "保存推荐位失败"})
        })) : a.post("/api/models", i).success(function (n) {
            i._id = n._id, e.$parent.models.push(i), e.$emit("notification", {
                type: "success",
                message: "保存推荐位成功"
            }), e.$emit("mainCategoriesUpdate"), t.go("main.featureModels")
        }).error(function () {
            e.$emit("notification", {type: "danger", message: "保存推荐位失败"})
        })
    }
}]), angular.module("controllers").controller("featureModels", ["$scope", "$http", "account", function (e, t, n) {
    "use strict";
    e.transmitting = !1, e.models = [], e.deleteModelId = "", e.systemKey = [{
        name: "sort",
        value: "排序"
    }, {name: "thumbnail", value: "缩略图"}, {name: "title", value: "标题"}, {
        name: "url",
        value: "链接"
    }], e.editAuth = !1, n.auths().then(function (t) {
        e.editAuth = t.featureModels.edit
    }, function () {
        e.$emit("notification", {type: "danger", message: "读取权限失败"})
    }), t.get("/api/models", {params: {type: "feature"}}).then(function (t) {
        e.models = t.data
    }, function () {
        e.$emit("notification", {type: "danger", message: "读取内容模型失败"})
    }), e.deleteModel = function () {
        e.transmitting = !0, t["delete"]("/api/models/" + e.deleteModelId).then(function () {
            for (var t = 0; t < e.models.length; t++)if (e.deleteModelId === e.models[t]._id)return e.models.splice(t, 1), $("#deleteModal").modal("hide"), e.transmitting = !1, e.$emit("notification", {
                type: "success",
                message: "删除推荐位成功"
            })
        }, function () {
            e.$emit("notification", {type: "danger", message: "删除推荐位失败"})
        })
    }
}]), angular.module("controllers").controller("featuresChange", ["$scope", "$state", "$stateParams", "$http", function (e, t, n, a) {
    "use strict";
    e.transmitting = !0, e.action = "create", e._id = "", e.sort = 0, e.title = "", e.url = "", e.thumbnail = {}, e.extensions = {}, e.model = {}, e.media = [], e.disabledExtMediaAdd = {}, async.parallel({
        model: function (e) {
            a.get("/api/models/" + n.model).then(function (t) {
                e(null, t.data)
            }, function () {
                e("读取推荐模型失败")
            })
        }, feature: function (e) {
            return n.feature ? void a.get("/api/features/" + n.feature).then(function (t) {
                e(null, t.data)
            }, function () {
                e("读取推荐失败")
            }) : e()
        }
    }, function (t, a) {
        if (t)return e.$emit("notification", {type: "danger", message: t}), !1;
        var i = a.model, o = a.feature;
        e.model = i, n.feature && (e._id = o._id, e.action = "update", e.sort = o.sort, e.title = o.title, e.url = o.url, e.extensions = o.extensions, o.thumbnail && (e.thumbnail._id = o.thumbnail._id, e.thumbnail.uploadStatus = "success", e.thumbnail.croppedImage = o.thumbnail.src), _.isEmpty(o.media) || _.map(o.media, function (t) {
            var n = _.get(t.fileName.match(/^.+\.(\w+)$/), 1), a = {
                file: null,
                fileName: t.fileName,
                fileNameLast: n,
                isImage: !1,
                description: t.description,
                src: t.src,
                _id: t._id,
                uploadStatus: "success",
                active: !1,
                edited: !1
            };
            switch (n) {
                case"jpg":
                case"jpeg":
                case"png":
                case"gif":
                    a.isImage = !0
            }
            e.media.push(a)
        })), e.transmitting = !1
    }), e.addExtensionMedia = function (t, n) {
        e.extensions[t] = e.extensions[t] || [], e.mediaSelect({limit: n - e.extensions[t].length}, function (a) {
            e.extensions[t] = _.concat(e.extensions[t], a), n - e.extensions[t].length < 1 ? e.disabledExtMediaAdd[t] = !0 : e.disabledExtMediaAdd[t] = !1
        })
    }, e.removeExtensionsMedia = function (t, n, a) {
        _.pull(e.extensions[t], a), n - e.extensions[t].lengt < 1 ? e.disabledExtMediaAdd[t] = !0 : e.disabledExtMediaAdd[t] = !1
    }, e.saveFeature = function () {
        e.transmitting = !0;
        var i = {model: e.model._id, sort: e.sort, title: e.title};
        e.url && (i.url = e.url), e.thumbnail._id && (i.thumbnail = e.thumbnail._id), _.isEmpty(e.media) || (i.media = _.map(e.media, "_id")), _.isEmpty(e.extensions) || (i.extensions = e.extensions), n.feature ? a.put("/api/features/" + n.feature, i).then(function () {
            e.$emit("notification", {
                type: "success",
                message: "更新推荐成功"
            }), t.go("main.features", null, {reload: "main.features"})
        }, function () {
            e.$emit("notification", {type: "danger", message: "更新推荐失败"})
        }) : a.post("/api/features", i).then(function () {
            e.$emit("notification", {
                type: "success",
                message: "发布推荐成功"
            }), t.go("main.features", null, {reload: "main.features"})
        }, function () {
            e.$emit("notification", {type: "danger", message: "发布推荐失败"})
        })
    }
}]), angular.module("controllers").controller("features", ["$scope", "$rootScope", "$http", "account", function (e, t, n, a) {
    "use strict";
    e.transmitting = !1, e.noFeatureModel = !1, e.deleteFeatureInfo = {
        modelId: "",
        featureId: ""
    }, e.models = [], e.currentAuth = !1, e.editAuth = !1, a.auths().then(function (t) {
        e.editAuth = t.features.edit
    }, function () {
        e.$emit("notification", {type: "danger", message: "读取权限失败"})
    }), async.parallel({
        model: function (e) {
            n.get("/api/models", {params: {type: "feature"}}).then(function (t) {
                e(null, t.data)
            }, function () {
                e("读取推荐模型失败")
            })
        }, features: function (e) {
            n.get("/api/features").then(function (t) {
                e(null, t.data)
            }, function () {
                e("读取推荐失败")
            })
        }
    }, function (t, n) {
        return t ? (e.$emit("notification", {
            type: "danger",
            message: t
        }), !1) : _.isEmpty(n.model) ? e.noFeatureModel = !0 : void(e.models = _.map(n.model, function (e) {
            return e.features = _.filter(n.features, function (t) {
                return t.model === e._id
            }), e
        }))
    }), e.deleteFeature = function () {
        e.transmitting = !0;
        var t = e.deleteFeatureInfo;
        n["delete"]("/api/features/" + t.featureId).then(function () {
            var n = _.find(e.models, {_id: t.modelId});
            _.forEach(n.features, function (e, a) {
                return e._id === t.featureId ? (n.features.splice(a, 1), !1) : void 0
            }), $("#deleteModal").modal("hide"), e.transmitting = !1, e.$emit("notification", {
                type: "success",
                message: "删除推荐成功"
            })
        }, function () {
            e.$emit("notification", {type: "danger", message: "删除推荐失败"})
        })
    }
}]), angular.module("controllers").controller("install", ["$scope", "$state", "$http", "$timeout", function (e, t, n, a) {
    "use strict";
    e.transmitting = !1, e.page = "license", e.databaseHost = "localhost", e.databasePort = 27017, e.database = "nodercms", e.databaseUser = "", e.databasePassword = "", e.databaseError = !1, e.themes = [], e.theme = "default", e.themeError = !1, e.title = "", e.email = "", e.nickname = "", e.password = "", e.siteInfoError = !1, e.hasInstall = !1, e.installingTimeout = null, e.installingPoll = null, e.loadThemes = function () {
        n.get("/api/install/themes").then(function (t) {
            var n = t.data;
            e.themes = n, e.themeError = !1
        }, function () {
            e.themeError = !0
        })
    }, e.loadThemes(), e.testDatabase = function () {
        e.transmitting = !0;
        var t = {
            host: e.databaseHost,
            port: e.databasePort,
            db: e.database,
            user: e.databaseUser,
            pass: e.databasePassword
        };
        n.put("/api/install/test-database", t).then(function () {
            e.transmitting = !1, e.databaseError = !1, e.page = "siteInfo"
        }, function () {
            e.transmitting = !1, e.databaseError = !0
        })
    }, e.submitInstall = function () {
        e.transmitting = !0, e.installing();
        var t = {
            databaseHost: e.databaseHost,
            databasePort: e.databasePort,
            database: e.database,
            databaseUser: e.databaseUser,
            databasePassword: e.databasePassword,
            title: e.title,
            theme: e.theme,
            email: e.email.toLowerCase(),
            nickname: e.nickname,
            password: e.password
        };
        n.post("/api/install", t).then(function () {
            e.hasInstall = !0
        }, function () {
            e.installingTimeout && a.cancel(e.installingTimeout), e.installingPoll && a.cancel(e.installingPoll), e.transmitting = !1, e.siteInfoError = !0, e.page = "siteInfo"
        })
    }, e.installing = function () {
        e.page = "installing", e.installingTimeout = a(function t() {
            e.hasInstall ? e.page = "installed" : e.installingPoll = a(t, 1e3)
        }, 1e3)
    }
}]), angular.module("controllers").controller("main", ["$scope", "$http", function (e, t) {
    "use strict";
    e.website = {
        hostname: window.location.hostname,
        origin: window.location.origin
    }, e.systemInfo = {}, e.nodeInfo = {}, e.databaseInfo = {}, e.contentsTotal = "", e.mediaTotal = "", e.adminsTotal = "", e.readingList = {}, t.get("/api/dashboard").then(function (t) {
        var n = t.data;
        e.systemInfo = n.systemInfo, e.nodeInfo = n.nodeInfo, e.databaseInfo = n.databaseInfo, e.contentsTotal = n.contentsTotal, e.mediaTotal = n.mediaTotal, e.adminsTotal = n.adminsTotal, e.readingList = n.readingList
    }, function () {
        e.$emit("notification", {type: "danger", message: "读取控制面板数据失败"})
    }), t.put("/api/statistics", {hostname: e.website.hostname})
}]), angular.module("controllers").controller("media", ["$scope", "$state", "$stateParams", "$http", "account", function (e, t, n, a, i) {
    "use strict";
    e.transmitting = !1, e.media = [], e.currentPage = 1, e.totalPages = 0, e.deleteMediumId = "", e.editAuth = !1, i.auths().then(function (t) {
        e.editAuth = t.media.edit
    }, function () {
        e.$emit("notification", {type: "danger", message: "读取权限失败"})
    }), e.loadMedia = function () {
        a.get("/api/media", {params: {currentPage: e.currentPage, pageSize: 20}}).then(function (t) {
            var n = t.data;
            _.map(n.media, function (e) {

                var t = _.get(e.fileName.match(/^.+\.(\w+)$/), 1);
                switch (e.fileNameLast = t, e.isImage = !1, t) {
                    case"jpg":
                    case"jpeg":
                    case"png":
                    case"gif":
                        e.isImage = !0
                }
            }), e.media = n.media, e.totalPages = n.pages
        })
    }, e.loadMedia(), e.$watch("currentPage", function () {
        e.loadMedia()
    }), e.deleteMedium = function () {
        e.transmitting = !0, a["delete"]("/api/media/" + e.deleteMediumId).then(function () {
            e.loadMedia(), $("#deleteModal").modal("hide"), e.transmitting = !1, e.$emit("notification", {
                type: "success",
                message: "删除媒体成功"
            })
        }, function () {
            e.$emit("notification", {type: "danger", message: "删除媒体失败"})
        })
    }
}]), angular.module("controllers").controller("pageChange", ["$scope", "$state", "$stateParams", "$http", "account", "$sce", function (e, t, n, a, i, o) {
    "use strict";
    e.transmitting = !0, e._id = n.page, e.name = "", e.pageContent = "", e.pageMedia = [], e.editAuth = !1, e.readAuth = !1;
    var s = i.auths().then(function (t) {
        return e.editAuth = t.pages.edit, e.readAuth = t.pages.read, t.pages.read && !t.pages.edit ? a.get("/api/pages/" + n.page) : t.pages.edit ? a.get("/api/pages/" + n.page, {params: {markdown: !0}}) : void 0
    }, function () {
        e.$emit("notification", {type: "danger", message: "读取权限失败"})
    });
    n.page && s.then(function (t) {
        var n = t.data;
        n ? (_.isEmpty(n.pageMedia) || _.forEach(n.pageMedia, function (t) {
            e.pageMedia.push({
                file: null,
                fileName: t.fileName,
                description: t.description,
                src: t.src,
                _id: t._id,
                uploadStatus: "success",
                active: !1,
                edited: !1
            })
        }), e.name = n.name, e.editAuth ? e.pageContent = n.pageContent : e.readAuth && (e.pageContent = o.trustAsHtml(n.pageContent)), e.transmitting = !1) : e.transmitting = !0
    }, function () {
        e.$emit("notification", {type: "danger", message: "获取内容失败"})
    }), e.savePage = function () {
        e.transmitting = !0;
        var i = {pageContent: e.pageContent};
        _.isEmpty(e.pageMedia) || (i.pageMedia = _.map(e.pageMedia, "_id")), a.put("/api/pages/" + n.page, i).then(function () {
            e.transmitting = !1, e.$emit("notification", {
                type: "success",
                message: "更新单页成功"
            }), t.go("main.pages", {page: n.page}, {reload: "main.pages"})
        }, function () {
            e.$emit("notification", {type: "danger", message: "更新单页失败"})
        })
    }
}]), angular.module("controllers").controller("rolesChange", ["$scope", "$state", "$stateParams", "$http", function (e, t, n, a) {
    "use strict";
    e.transmitting = !1, e.action = "create", e._id = n._id, e.name = "", e.description = "", e.authorities = [], async.parallel({
        authorities: function (e) {
            a.get("/api/authorities").then(function (t) {
                var n = _.reject(t.data, {code: 1e5});
                e(null, n)
            }, function () {
                e("获取权限失败")
            })
        }, role: function (t) {
            n._id ? (e.action = "update", a.get("/api/roles/" + n._id).then(function (e) {
                var n = e.data;
                t(null, n)
            }, function () {
                t("获取角色失败")
            })) : t(null)
        }
    }, function (t, n) {
        return t ? (e.$emit("notification", {
            type: "danger",
            message: t
        }), !1) : (e.authorities = _.map(n.authorities, function (e) {
            return e.select = 0, e
        }), void(n.role && (e.name = n.role.name, e.description = n.role.description, _.forEach(e.authorities, function (e) {
            e.select = 0;
            var t = _.find(e.authorities, {name: "read"}).code, a = _.find(e.authorities, {name: "edit"}).code, i = _.find(n.role.authorities, function (e) {
                return e === t
            }), o = _.find(n.role.authorities, function (e) {
                return e === a
            });
            i && o ? e.select = 2 : i && (e.select = 1)
        }))))
    }), e.saveRole = function () {
        e.transmitting = !0;
        var i = {name: e.name, description: e.description, authorities: []};
        _.forEach(e.authorities, function (e) {
            switch (e.select) {
                case 0:
                    break;
                case 1:
                    _.forEach(e.authorities, function (e) {
                        "read" === e.name && i.authorities.push(e.code)
                    });
                    break;
                case 2:
                    _.forEach(e.authorities, function (e) {
                        "read" === e.name && i.authorities.push(e.code), "edit" === e.name && i.authorities.push(e.code)
                    })
            }
        }), n._id ? (i._id = n._id, a.put("/api/roles/" + n._id, i).then(function () {
            e.$emit("notification", {
                type: "success",
                message: "保存角色成功"
            }), e.$emit("mainUserUpdate"), t.go("main.roles", null, {reload: "main.roles"})
        }, function () {
            e.$emit("notification", {type: "danger", message: "保存角色失败"})
        })) : a.post("/api/roles", i).then(function () {
            e.$emit("notification", {
                type: "success",
                message: "新增角色成功"
            }), e.$emit("mainUserUpdate"), t.go("main.roles", null, {reload: "main.roles"})
        }, function () {
            e.$emit("notification", {type: "danger", message: "新增角色失败"})
        })
    }
}]), angular.module("controllers").controller("roles", ["$scope", "$http", "account", function (e, t, n) {
    "use strict";
    e.transmitting = !1, e.roles = [], e.deleteRoleId = "", e.editAuth = !1, n.auths().then(function (t) {
        e.editAuth = t.roles.edit
    }, function () {
        e.$emit("notification", {type: "danger", message: "读取权限失败"})
    }), t.get("/api/roles").then(function (t) {
        var n = _.reject(t.data, function (e) {
            var t = _.find(e.authorities, function (e) {
                return 1e5 === e
            });
            return t
        });
        e.roles = n
    }, function () {
        e.$emit("notification", {type: "danger", message: "获取角色列表失败"})
    }), e.deleteRole = function () {
        e.transmitting = !0, t["delete"]("/api/roles/" + e.deleteRoleId).success(function () {
            _.pullAllBy(e.roles, [{_id: e.deleteRoleId}], "_id"), $("#deleteModal").modal("hide"), e.transmitting = !1, e.$emit("notification", {
                type: "success",
                message: "删除角色成功"
            })
        }).error(function () {
            $("#deleteModal").modal("hide"), e.$emit("notification", {type: "danger", message: "删除角色失败"})
        })
    }
}]), angular.module("controllers").controller("signIn", ["$scope", "$timeout", "$state", "$http", function (e, t, n, a) {
    "use strict";
    function i() {
        e.wrongEmailOrPassword = !1
    }

    function o() {
        e.wrongCaptcha = !1
    }

    e.transmitting = !1, e.email = "", e.password = "", e.captcha = "", e.captchaData = "", e.autoSignIn = !1, e.wrongEmailOrPassword = !1, e.wrongCaptcha = !1, e.$watch("email", i), e.$watch("password", i), e.$watch("captcha", o), e.getCaptcha = function () {
        a.get("/api/account/captcha").then(function (t) {
            e.captchaData = t.data
        })
    }, e.getCaptcha(), e.signIn = function () {
        e.transmitting = !0, a.put("/api/account/sign-in", {
            email: e.email,
            password: e.password,
            captcha: e.captcha.toLowerCase(),
            autoSignIn: e.autoSignIn
        }).then(function () {
            n.go("main")
        }, function (n) {
            e.getCaptcha();
            var a = n.data;
            switch (_.get(a, "error.code")) {
                case"WRONG_EMAIL_OR_PASSWORD":
                    e.wrongEmailOrPassword = !0;
                    break;
                case"WRONG_CAPTCHA":
                    e.wrongCaptcha = !0
            }
            e.animateShake = !0, t(function () {
                e.animateShake = !1, e.transmitting = !1
            }, 600)
        })
    }
}]), angular.module("controllers").controller("siteInfo", ["$scope", "$http", "account", function (e, t, n) {
    "use strict";
    e.transmitting = !0, e.themes = [], e.theme = "", e.title = "", e.keywords = "", e.description = "", e.codeHeader = "", e.codeFooter = "", e.editAuth = !1, e.readAuth = !1, n.auths().then(function (t) {
        e.editAuth = t.siteInfo.edit, e.readAuth = t.siteInfo.read
    }, function () {
        e.$emit("notification", {type: "danger", message: "读取权限失败"})
    }), t.get("/api/site-info").success(function (t) {
        e.themes = t.themes, e.theme = t.siteInfo.theme || "default", e.title = t.siteInfo.title, e.keywords = t.siteInfo.keywords, e.description = t.siteInfo.description, e.codeHeader = t.siteInfo.codeHeader, e.codeFooter = t.siteInfo.codeFooter, e.transmitting = !1
    }).error(function () {
        e.$emit("notification", {type: "danger", message: "获取网站配置失败"})
    }), e.submitSiteInfo = function () {
        e.transmitting = !0, t.put("/api/site-info", {
            theme: e.theme,
            title: e.title,
            keywords: e.keywords,
            description: e.description,
            codeHeader: e.codeHeader,
            codeFooter: e.codeFooter
        }).success(function () {
            e.transmitting = !1, e.$emit("notification", {type: "success", message: "网站配置已保存"})
        }).error(function () {
            e.transmitting = !1, e.$emit("notification", {type: "danger", message: "网站配置保存失败"})
        })
    }
}]), angular.module("controllers").controller("trash", ["$scope", "$state", "$stateParams", "$http", "account", function (e, t, n, a, i) {
    "use strict";
    e.transmitting = !1, e.category = {}, e.contents = [], e.currentPage = 1, e.totalPages = 0, e.deleteContentId = "", e.recoveryContentId = "", e.statusType = [{
        name: "草稿",
        value: "draft"
    }, {name: "已发布", value: "pushed"}], e.editAuth = !1, i.auths().then(function (t) {
        e.editAuth = t.contents.edit
    }, function () {
        e.$emit("notification", {type: "danger", message: "读取权限失败"})
    }), e.loadContents = function () {
        a.get("/api/contents", {params: {deleted: !0, currentPage: e.currentPage, pageSize: 20}}).then(function (t) {
            var n = t.data;
            e.contents = n.contents, e.totalPages = n.pages
        })
    }, e.loadContents(), e.$watch("currentPage", function () {
        e.loadContents()
    }), e.recoveryContent = function () {
        e.transmitting = !0;
        var t = {deleted: !1, part: !0};
        a.put("/api/contents/" + e.recoveryContentId, t).then(function () {
            e.loadContents(), $("#recoveryModal").modal("hide"), e.transmitting = !1, e.$emit("notification", {
                type: "success",
                message: "恢复内容成功"
            })
        }, function () {
            e.$emit("notification", {type: "danger", message: "恢复内容失败"})
        })
    }, e.deleteContent = function () {
        e.transmitting = !0, a["delete"]("/api/contents/" + e.deleteContentId).then(function () {
            e.loadContents(), $("#deleteModal").modal("hide"), e.transmitting = !1, e.$emit("notification", {
                type: "success",
                message: "删除内容成功"
            })
        }, function () {
            e.$emit("notification", {type: "danger", message: "删除内容失败"})
        })
    }, e.deleteListContent = function () {
        e.transmitting = !0, a["delete"]("/api/contents", {params: {ids: _.map(e.contents, "_id")}}).then(function () {
            e.loadContents(), $("#deleteListModal").modal("hide"), e.transmitting = !1, e.$emit("notification", {
                type: "success",
                message: "删除内容成功"
            })
        }, function () {
            e.$emit("notification", {type: "danger", message: "删除内容失败"})
        })
    }
}]), angular.module("services").factory("account", ["$rootScope", "$http", "$q", "$cacheFactory", function (e, t, n, a) {
    "use strict";
    var i = a("account");
    return {
        get: function () {
            var e = n.defer();
            return i.get("user") ? e.resolve(i.get("user")) : t.get("/api/account").then(function (t) {
                var n = t.data;
                i.put("user", n), e.resolve(n)
            }, function (t) {
                e.reject(t.data)
            }), e.promise
        }, auths: function () {
            var e = this;
            return e.get().then(function (e) {
                var t = {
                    features: {read: !1, edit: !1},
                    contents: {read: !1, edit: !1},
                    pages: {read: !1, edit: !1},
                    media: {read: !1, edit: !1},
                    account: {read: !1, edit: !1},
                    siteInfo: {read: !1, edit: !1},
                    categories: {read: !1, edit: !1},
                    contentModels: {read: !1, edit: !1},
                    featureModels: {read: !1, edit: !1},
                    roles: {read: !1, edit: !1},
                    adminUsers: {read: !1, edit: !1}
                };
                return _.forEach(_.get(e, "role.authorities"), function (e) {
                    if (1e5 === e)return _.forEach(t, function (e, n) {
                        t[n] = {read: !0, edit: !0}
                    }), !1;
                    switch (e) {
                        case 100100:
                            t.features.read = !0;
                            break;
                        case 100101:
                            t.features.edit = !0;
                            break;
                        case 100200:
                            t.contents.read = !0;
                            break;
                        case 100201:
                            t.contents.edit = !0;
                            break;
                        case 100300:
                            t.pages.read = !0;
                            break;
                        case 100301:
                            t.pages.edit = !0;
                            break;
                        case 100400:
                            t.media.read = !0;
                            break;
                        case 100401:
                            t.media.edit = !0;
                            break;
                        case 109e3:
                            t.account.read = !0;
                            break;
                        case 109001:
                            t.account.edit = !0;
                            break;
                        case 110100:
                            t.siteInfo.read = !0;
                            break;
                        case 110101:
                            t.siteInfo.edit = !0;
                            break;
                        case 110200:
                            t.categories.read = !0;
                            break;
                        case 110201:
                            t.categories.edit = !0;
                            break;
                        case 110300:
                            t.contentModels.read = !0;
                            break;
                        case 110301:
                            t.contentModels.edit = !0;
                            break;
                        case 110400:
                            t.featureModels.read = !0;
                            break;
                        case 110401:
                            t.featureModels.edit = !0;
                            break;
                        case 110500:
                            t.roles.read = !0;
                            break;
                        case 110501:
                            t.roles.edit = !0;
                            break;
                        case 110600:
                            t.adminUsers.read = !0;
                            break;
                        case 110601:
                            t.adminUsers.edit = !0
                    }
                }), t
            }, function (e) {
                return e
            })
        }, reset: function () {
            i.remove("user")
        }
    }
}]), angular.module("services").factory("authorityInterceptor", ["$q", "$injector", function (e, t) {
    "use strict";
    return {
        responseError: function (n) {
            if (401 === n.status && n.data && n.data.error)switch (t.get("account").reset(), n.data.error.code) {
                case"NOT_LOGGED_IN":
                    t.get("$state").go("signIn");
                    break;
                case"NO_AUTHORITY":
                    var a = t.get("$state");
                    "main" !== a.current.name && a.go("main", {}, {reload: "main"})
            }
            return 404 === n.status && n.data && n.data.error && "USER_NOT_FOUND" === n.data.error.code && t.get("$state").go("signIn"), e.reject(n)
        }
    }
}]), angular.module("services").factory("base64ToBlobFile", [function () {
    "use strict";
    return function (e, t, n) {
        t = t || "BlobFile.png", n = n || "";
        for (var a = 1024, i = atob(e.replace("data:image/png;base64,", "")), o = i.length, s = Math.ceil(o / a), r = new Array(s), c = 0; s > c; ++c) {
            for (var l = c * a, u = Math.min(l + a, o), d = new Array(u - l), m = l, g = 0; u > m; ++g, ++m)d[g] = i[m].charCodeAt(0);
            r[c] = new Uint8Array(d)
        }
        var p = new Blob(r, {type: n});
        return p.name = t, p.lastModifiedDate = new Date, p
    }
}]), angular.module("services").factory("checkAuthResolve", ["$rootScope", "$q", "$state", "account", function (e, t, n, a) {
    "use strict";
    return function (i, o) {
        var s = t.defer();
        return a.auths().then(function (e) {
            e[i][o] ? s.resolve() : (a.reset(), n.go("main", null, {reload: "main"}))
        }, function () {
            a.reset(), e.$emit("notification", {type: "danger", message: "读取权限失败"})
        }), s.promise
    }
}]), angular.module("services").factory("checkInstallResolve", ["$q", "$state", "$http", function (e, t, n) {
    "use strict";
    return {
        leaveToSignInOrNone: function () {
            var a = e.defer();
            return n.get("/api/install").then(function (e) {
                var n = e.data;
                n.hasInstall ? t.go("signIn") : a.resolve()
            }, function () {
                t.go("signIn")
            }), a.promise
        }, enterToInstallOrNone: function () {
            var a = e.defer();
            return n.get("/api/install").then(function (e) {
                var n = e.data;
                n.hasInstall ? a.resolve() : t.go("install")
            }, function () {
                a.resolve()
            }), a.promise
        }
    }
}]), angular.module("services").factory("checkSignIn", ["$rootScope", "$state", "ipCookie", function (e, t, n) {
    "use strict";
    return function () {
        e.$on("$stateChangeStart", function (e, a, i, o, s) {
            n("nodercmsSid") || "signIn" === a.name || "install" === a.name || (e.preventDefault(), t.go("signIn"))
        })
    }
}]), angular.module("services").factory("pinyin", ["$http", "$q", function (e, t) {
    "use strict";
    function n(e) {
        for (var t in a)if (-1 !== a[t].indexOf(e))return t;
        return !1
    }

    var a = {
        a: "啊阿锕",
        ai: "埃挨哎唉哀皑癌蔼矮艾碍爱隘诶捱嗳嗌嫒瑷暧砹锿霭",
        an: "鞍氨安俺按暗岸胺案谙埯揞犴庵桉铵鹌顸黯",
        ang: "肮昂盎",
        ao: "凹敖熬翱袄傲奥懊澳坳拗嗷噢岙廒遨媪骜聱螯鏊鳌鏖",
        ba: "芭捌扒叭吧笆八疤巴拔跋靶把耙坝霸罢爸茇菝萆捭岜灞杷钯粑鲅魃",
        bai: "白柏百摆佰败拜稗薜掰鞴",
        ban: "斑班搬扳般颁板版扮拌伴瓣半办绊阪坂豳钣瘢癍舨",
        bang: "邦帮梆榜膀绑棒磅蚌镑傍谤蒡螃",
        bao: "苞胞包褒雹保堡饱宝抱报暴豹鲍爆勹葆宀孢煲鸨褓趵龅",
        bo: "剥薄玻菠播拨钵波博勃搏铂箔伯帛舶脖膊渤泊驳亳蕃啵饽檗擘礴钹鹁簸跛",
        bei: "杯碑悲卑北辈背贝钡倍狈备惫焙被孛陂邶埤蓓呗怫悖碚鹎褙鐾",
        ben: "奔苯本笨畚坌锛",
        beng: "崩绷甭泵蹦迸唪嘣甏",
        bi: "逼鼻比鄙笔彼碧蓖蔽毕毙毖币庇痹闭敝弊必辟壁臂避陛匕仳俾芘荜荸吡哔狴庳愎滗濞弼妣婢嬖璧贲畀铋秕裨筚箅篦舭襞跸髀",
        bian: "鞭边编贬扁便变卞辨辩辫遍匾弁苄忭汴缏煸砭碥稹窆蝙笾鳊",
        biao: "标彪膘表婊骠飑飙飚灬镖镳瘭裱鳔",
        bie: "鳖憋别瘪蹩鳘",
        bin: "彬斌濒滨宾摈傧浜缤玢殡膑镔髌鬓",
        bing: "兵冰柄丙秉饼炳病并禀邴摒绠枋槟燹",
        bu: "捕卜哺补埠不布步簿部怖拊卟逋瓿晡钚醭",
        ca: "擦嚓礤",
        cai: "猜裁材才财睬踩采彩菜蔡",
        can: "餐参蚕残惭惨灿骖璨粲黪",
        cang: "苍舱仓沧藏伧",
        cao: "操糙槽曹草艹嘈漕螬艚",
        ce: "厕策侧册测刂帻恻",
        ceng: "层蹭噌",
        cha: "插叉茬茶查碴搽察岔差诧猹馇汊姹杈楂槎檫钗锸镲衩",
        chai: "拆柴豺侪茈瘥虿龇",
        chan: "搀掺蝉馋谗缠铲产阐颤冁谄谶蒇廛忏潺澶孱羼婵嬗骣觇禅镡裣蟾躔",
        chang: "昌猖场尝常长偿肠厂敞畅唱倡伥鬯苌菖徜怅惝阊娼嫦昶氅鲳",
        chao: "超抄钞朝嘲潮巢吵炒怊绉晁耖",
        che: "车扯撤掣彻澈坼屮砗",
        chen: "郴臣辰尘晨忱沉陈趁衬称谌抻嗔宸琛榇肜胂碜龀",
        cheng: "撑城橙成呈乘程惩澄诚承逞骋秤埕嵊徵浈枨柽樘晟塍瞠铖裎蛏酲",
        chi: "吃痴持匙池迟弛驰耻齿侈尺赤翅斥炽傺墀芪茌搋叱哧啻嗤彳饬沲媸敕胝眙眵鸱瘛褫蚩螭笞篪豉踅踟魑",
        chong: "充冲虫崇宠茺忡憧铳艟",
        chou: "抽酬畴踌稠愁筹仇绸瞅丑俦圳帱惆溴妯瘳雠鲋",
        chu: "臭初出橱厨躇锄雏滁除楚础储矗搐触处亍刍憷绌杵楮樗蜍蹰黜",
        chuan: "揣川穿椽传船喘串掾舛惴遄巛氚钏镩舡",
        chuang: "疮窗幢床闯创怆",
        chui: "吹炊捶锤垂陲棰槌",
        chun: "春椿醇唇淳纯蠢促莼沌肫朐鹑蝽",
        chuo: "戳绰蔟辶辍镞踔龊",
        ci: "疵茨磁雌辞慈瓷词此刺赐次荠呲嵯鹚螅糍趑",
        cong: "聪葱囱匆从丛偬苁淙骢琮璁枞",
        cu: "凑粗醋簇猝殂蹙",
        cuan: "蹿篡窜汆撺昕爨",
        cui: "摧崔催脆瘁粹淬翠萃悴璀榱隹",
        cun: "村存寸磋忖皴",
        cuo: "撮搓措挫错厝脞锉矬痤鹾蹉躜",
        da: "搭达答瘩打大耷哒嗒怛妲疸褡笪靼鞑",
        dai: "呆歹傣戴带殆代贷袋待逮怠埭甙呔岱迨逯骀绐玳黛",
        dan: "耽担丹单郸掸胆旦氮但惮淡诞弹蛋亻儋卩萏啖澹檐殚赕眈瘅聃箪",
        dang: "当挡党荡档谠凼菪宕砀铛裆",
        dao: "刀捣蹈倒岛祷导到稻悼道盗叨啁忉洮氘焘忑纛",
        de: "德得的锝",
        deng: "蹬灯登等瞪凳邓噔嶝戥磴镫簦",
        di: "堤低滴迪敌笛狄涤翟嫡抵底地蒂第帝弟递缔氐籴诋谛邸坻莜荻嘀娣柢棣觌砥碲睇镝羝骶",
        dian: "颠掂滇碘点典靛垫电佃甸店惦奠淀殿丶阽坫埝巅玷癜癫簟踮",
        diao: "碉叼雕凋刁掉吊钓调轺铞蜩粜貂",
        die: "跌爹碟蝶迭谍叠佚垤堞揲喋渫轶牒瓞褶耋蹀鲽鳎",
        ding: "丁盯叮钉顶鼎锭定订丢仃啶玎腚碇町铤疔耵酊",
        dong: "东冬董懂动栋侗恫冻洞垌咚岽峒夂氡胨胴硐鸫",
        dou: "兜抖斗陡豆逗痘蔸钭窦窬蚪篼酡",
        du: "都督毒犊独读堵睹赌杜镀肚度渡妒芏嘟渎椟橐牍蠹笃髑黩",
        duan: "端短锻段断缎彖椴煅簖",
        dui: "堆兑队对怼憝碓",
        dun: "墩吨蹲敦顿囤钝盾遁炖砘礅盹镦趸",
        duo: "掇哆多夺垛躲朵跺舵剁惰堕咄哚缍柁铎裰踱",
        e: "蛾峨鹅俄额讹娥恶厄扼遏鄂饿噩谔垩垭苊莪萼呃愕屙婀轭曷腭硪锇锷鹗颚鳄",
        en: "恩蒽摁唔嗯",
        er: "而儿耳尔饵洱二贰迩珥铒鸸鲕",
        fa: "发罚筏伐乏阀法珐垡砝",
        fan: "藩帆番翻樊矾钒繁凡烦反返范贩犯饭泛蘩幡犭梵攵燔畈蹯",
        fang: "坊芳方肪房防妨仿访纺放匚邡彷钫舫鲂",
        fei: "菲非啡飞肥匪诽吠肺废沸费芾狒悱淝妃绋绯榧腓斐扉祓砩镄痱蜚篚翡霏鲱",
        fen: "芬酚吩氛分纷坟焚汾粉奋份忿愤粪偾瀵棼愍鲼鼢",
        feng: "丰封枫蜂峰锋风疯烽逢冯缝讽奉凤俸酆葑沣砜",
        fu: "佛否夫敷肤孵扶拂辐幅氟符伏俘服浮涪福袱弗甫抚辅俯釜斧脯腑府腐赴副覆赋复傅付阜父腹负富讣附妇缚咐匐凫郛芙苻茯莩菔呋幞滏艴孚驸绂桴赙黻黼罘稃馥虍蚨蜉蝠蝮麸趺跗鳆",
        ga: "噶嘎蛤尬呷尕尜旮钆",
        gai: "该改概钙盖溉丐陔垓戤赅胲",
        gan: "干甘杆柑竿肝赶感秆敢赣坩苷尴擀泔淦澉绀橄旰矸疳酐",
        gang: "冈刚钢缸肛纲岗港戆罡颃筻",
        gong: "杠工攻功恭龚供躬公宫弓巩汞拱贡共蕻廾咣珙肱蚣蛩觥",
        gao: "篙皋高膏羔糕搞镐稿告睾诰郜蒿藁缟槔槁杲锆",
        ge: "哥歌搁戈鸽胳疙割革葛格阁隔铬个各鬲仡哿塥嗝纥搿膈硌铪镉袼颌虼舸骼髂",
        gei: "给",
        gen: "根跟亘茛哏艮",
        geng: "耕更庚羹埂耿梗哽赓鲠",
        gou: "钩勾沟苟狗垢构购够佝诟岣遘媾缑觏彀鸲笱篝鞲",
        gu: "辜菇咕箍估沽孤姑鼓古蛊骨谷股故顾固雇嘏诂菰哌崮汩梏轱牯牿胍臌毂瞽罟钴锢瓠鸪鹄痼蛄酤觚鲴骰鹘",
        gua: "刮瓜剐寡挂褂卦诖呱栝鸹",
        guai: "乖拐怪哙",
        guan: "棺关官冠观管馆罐惯灌贯倌莞掼涫盥鹳鳏",
        guang: "光广逛犷桄胱疒",
        gui: "瑰规圭硅归龟闺轨鬼诡癸桂柜跪贵刽匦刿庋宄妫桧炅晷皈簋鲑鳜",
        gun: "辊滚棍丨衮绲磙鲧",
        guo: "锅郭国果裹过馘蠃埚掴呙囗帼崞猓椁虢锞聒蜮蜾蝈",
        ha: "哈",
        hai: "骸孩海氦亥害骇咴嗨颏醢",
        han: "酣憨邯韩含涵寒函喊罕翰撼捍旱憾悍焊汗汉邗菡撖阚瀚晗焓颔蚶鼾",
        hen: "夯痕很狠恨",
        hang: "杭航沆绗珩桁",
        hao: "壕嚎豪毫郝好耗号浩薅嗥嚆濠灏昊皓颢蚝",
        he: "呵喝荷菏核禾和何合盒貉阂河涸赫褐鹤贺诃劾壑藿嗑嗬阖盍蚵翮",
        hei: "嘿黑",
        heng: "哼亨横衡恒訇蘅",
        hong: "轰哄烘虹鸿洪宏弘红黉讧荭薨闳泓",
        hou: "喉侯猴吼厚候后堠後逅瘊篌糇鲎骺",
        hu: "呼乎忽瑚壶葫胡蝴狐糊湖弧虎唬护互沪户冱唿囫岵猢怙惚浒滹琥槲轷觳烀煳戽扈祜鹕鹱笏醐斛",
        hua: "花哗华猾滑画划化话劐浍骅桦铧稞",
        huai: "槐徊怀淮坏还踝",
        huan: "欢环桓缓换患唤痪豢焕涣宦幻郇奂垸擐圜洹浣漶寰逭缳锾鲩鬟",
        huang: "荒慌黄磺蝗簧皇凰惶煌晃幌恍谎隍徨湟潢遑璜肓癀蟥篁鳇",
        hui: "灰挥辉徽恢蛔回毁悔慧卉惠晦贿秽会烩汇讳诲绘诙茴荟蕙哕喙隳洄彗缋珲晖恚虺蟪麾",
        hun: "荤昏婚魂浑混诨馄阍溷缗",
        huo: "豁活伙火获或惑霍货祸攉嚯夥钬锪镬耠蠖",
        ji: "击圾基机畸稽积箕肌饥迹激讥鸡姬绩缉吉极棘辑籍集及急疾汲即嫉级挤几脊己蓟技冀季伎祭剂悸济寄寂计记既忌际妓继纪居丌乩剞佶佴脔墼芨芰萁蒺蕺掎叽咭哜唧岌嵴洎彐屐骥畿玑楫殛戟戢赍觊犄齑矶羁嵇稷瘠瘵虮笈笄暨跻跽霁鲚鲫髻麂",
        jia: "嘉枷夹佳家加荚颊贾甲钾假稼价架驾嫁伽郏拮岬浃迦珈戛胛恝铗镓痂蛱笳袈跏",
        jian: "歼监坚尖笺间煎兼肩艰奸缄茧检柬碱硷拣捡简俭剪减荐槛鉴践贱见键箭件健舰剑饯渐溅涧建僭谏谫菅蒹搛囝湔蹇謇缣枧柙楗戋戬牮犍毽腱睑锏鹣裥笕箴翦趼踺鲣鞯",
        jiang: "僵姜将浆江疆蒋桨奖讲匠酱降茳洚绛缰犟礓耩糨豇",
        jiao: "蕉椒礁焦胶交郊浇骄娇嚼搅铰矫侥脚狡角饺缴绞剿教酵轿较叫佼僬茭挢噍峤徼姣纟敫皎鹪蛟醮跤鲛",
        jie: "窖揭接皆秸街阶截劫节桔杰捷睫竭洁结解姐戒藉芥界借介疥诫届偈讦诘喈嗟獬婕孑桀獒碣锴疖袷颉蚧羯鲒骱髫",
        jin: "巾筋斤金今津襟紧锦仅谨进靳晋禁近烬浸尽卺荩堇噤馑廑妗缙瑾槿赆觐钅锓衿矜",
        jing: "劲荆兢茎睛晶鲸京惊精粳经井警景颈静境敬镜径痉靖竟竞净刭儆阱菁獍憬泾迳弪婧肼胫腈旌",
        jiong: "炯窘冂迥扃",
        jiu: "揪究纠玖韭久灸九酒厩救旧臼舅咎就疚僦啾阄柩桕鹫赳鬏",
        ju: "鞠拘狙疽驹菊局咀矩举沮聚拒据巨具距踞锯俱句惧炬剧倨讵苣苴莒掬遽屦琚枸椐榘榉橘犋飓钜锔窭裾趄醵踽龃雎鞫",
        juan: "捐鹃娟倦眷卷绢鄄狷涓桊蠲锩镌隽",
        jue: "撅攫抉掘倔爵觉决诀绝厥劂谲矍蕨噘崛獗孓珏桷橛爝镢蹶觖",
        jun: "均菌钧军君峻俊竣浚郡骏捃狻皲筠麇",
        ka: "喀咖卡佧咔胩",
        ke: "咯坷苛柯棵磕颗科壳咳可渴克刻客课岢恪溘骒缂珂轲氪瞌钶疴窠蝌髁",
        kai: "开揩楷凯慨剀垲蒈忾恺铠锎",
        kan: "刊堪勘坎砍看侃凵莰莶戡龛瞰",
        kang: "康慷糠扛抗亢炕坑伉闶钪",
        kao: "考拷烤靠尻栲犒铐",
        ken: "肯啃垦恳垠裉颀",
        keng: "吭忐铿",
        kong: "空恐孔控倥崆箜",
        kou: "抠口扣寇芤蔻叩眍筘",
        ku: "枯哭窟苦酷库裤刳堀喾绔骷",
        kua: "夸垮挎跨胯侉",
        kuai: "块筷侩快蒯郐蒉狯脍",
        kuan: "宽款髋",
        kuang: "匡筐狂框矿眶旷况诓诳邝圹夼哐纩贶",
        kui: "亏盔岿窥葵奎魁傀馈愧溃馗匮夔隗揆喹喟悝愦阕逵暌睽聩蝰篑臾跬",
        kun: "坤昆捆困悃阃琨锟醌鲲髡",
        kuo: "括扩廓阔蛞",
        la: "垃拉喇蜡腊辣啦剌摺邋旯砬瘌",
        lai: "莱来赖崃徕涞濑赉睐铼癞籁",
        lan: "蓝婪栏拦篮阑兰澜谰揽览懒缆烂滥啉岚懔漤榄斓罱镧褴",
        lang: "琅榔狼廊郎朗浪莨蒗啷阆锒稂螂",
        lao: "捞劳牢老佬姥酪烙涝唠崂栳铑铹痨醪",
        le: "勒乐肋仂叻嘞泐鳓",
        lei: "雷镭蕾磊累儡垒擂类泪羸诔荽咧漯嫘缧檑耒酹",
        ling: "棱冷拎玲菱零龄铃伶羚凌灵陵岭领另令酃塄苓呤囹泠绫柃棂瓴聆蛉翎鲮",
        leng: "楞愣",
        li: "厘梨犁黎篱狸离漓理李里鲤礼莉荔吏栗丽厉励砾历利傈例俐痢立粒沥隶力璃哩俪俚郦坜苈莅蓠藜捩呖唳喱猁溧澧逦娌嫠骊缡珞枥栎轹戾砺詈罹锂鹂疠疬蛎蜊蠡笠篥粝醴跞雳鲡鳢黧",
        lian: "俩联莲连镰廉怜涟帘敛脸链恋炼练挛蔹奁潋濂娈琏楝殓臁膦裢蠊鲢",
        liang: "粮凉梁粱良两辆量晾亮谅墚椋踉靓魉",
        liao: "撩聊僚疗燎寥辽潦了撂镣廖料蓼尥嘹獠寮缭钌鹩耢",
        lie: "列裂烈劣猎冽埒洌趔躐鬣",
        lin: "琳林磷霖临邻鳞淋凛赁吝蔺嶙廪遴檩辚瞵粼躏麟",
        liu: "溜琉榴硫馏留刘瘤流柳六抡偻蒌泖浏遛骝绺旒熘锍镏鹨鎏",
        "long": "龙聋咙笼窿隆垄拢陇弄垅茏泷珑栊胧砻癃",
        lou: "楼娄搂篓漏陋喽嵝镂瘘耧蝼髅",
        lu: "芦卢颅庐炉掳卤虏鲁麓碌露路赂鹿潞禄录陆戮垆摅撸噜泸渌漉璐栌橹轳辂辘氇胪镥鸬鹭簏舻鲈",
        lv: "驴吕铝侣旅履屡缕虑氯律率滤绿捋闾榈膂稆褛",
        luan: "峦孪滦卵乱栾鸾銮",
        lue: "掠略锊",
        lun: "轮伦仑沦纶论囵",
        luo: "萝螺罗逻锣箩骡裸落洛骆络倮荦摞猡泺椤脶镙瘰雒",
        ma: "妈麻玛码蚂马骂嘛吗唛犸嬷杩麽",
        mai: "埋买麦卖迈脉劢荬咪霾",
        man: "瞒馒蛮满蔓曼慢漫谩墁幔缦熳镘颟螨鳗鞔",
        mang: "芒茫盲忙莽邙漭朦硭蟒",
        meng: "氓萌蒙檬盟锰猛梦孟勐甍瞢懵礞虻蜢蠓艋艨黾",
        miao: "猫苗描瞄藐秒渺庙妙喵邈缈缪杪淼眇鹋蜱",
        mao: "茅锚毛矛铆卯茂冒帽貌贸侔袤勖茆峁瑁昴牦耄旄懋瞀蛑蝥蟊髦",
        me: "么",
        mei: "玫枚梅酶霉煤没眉媒镁每美昧寐妹媚坶莓嵋猸浼湄楣镅鹛袂魅",
        men: "门闷们扪玟焖懑钔",
        mi: "眯醚靡糜迷谜弥米秘觅泌蜜密幂芈冖谧蘼嘧猕獯汨宓弭脒敉糸縻麋",
        mian: "棉眠绵冕免勉娩缅面沔湎腼眄",
        mie: "蔑灭咩蠛篾",
        min: "民抿皿敏悯闽苠岷闵泯珉",
        ming: "明螟鸣铭名命冥茗溟暝瞑酩",
        miu: "谬",
        mo: "摸摹蘑模膜磨摩魔抹末莫墨默沫漠寞陌谟茉蓦馍嫫镆秣瘼耱蟆貊貘",
        mou: "谋牟某厶哞婺眸鍪",
        mu: "拇牡亩姆母墓暮幕募慕木目睦牧穆仫苜呒沐毪钼",
        na: "拿哪呐钠那娜纳捺肭镎衲箬",
        nai: "氖乃奶耐奈鼐艿萘柰",
        nan: "南男难囊喃囡楠腩蝻赧",
        nao: "挠脑恼闹孬垴猱瑙硇铙蛲",
        ne: "淖呢讷",
        nei: "馁内",
        nen: "嫩能枘恁",
        ni: "妮霓倪泥尼拟你匿腻逆溺伲坭猊怩滠昵旎祢慝睨铌鲵",
        nian: "蔫拈年碾撵捻念廿辇黏鲇鲶",
        niang: "娘酿",
        niao: "鸟尿茑嬲脲袅",
        nie: "捏聂孽啮镊镍涅乜陧蘖嗫肀颞臬蹑",
        nin: "您柠",
        ning: "狞凝宁拧泞佞蓥咛甯聍",
        niu: "牛扭钮纽狃忸妞蚴",
        nong: "脓浓农侬",
        nu: "奴努怒呶帑弩胬孥驽",
        nv: "女恧钕衄",
        nuan: "暖",
        nuenue: "虐",
        nue: "疟谑",
        nuo: "挪懦糯诺傩搦喏锘",
        ou: "哦欧鸥殴藕呕偶沤怄瓯耦",
        pa: "啪趴爬帕怕琶葩筢",
        pai: "拍排牌徘湃派俳蒎",
        pan: "攀潘盘磐盼畔判叛爿泮袢襻蟠蹒",
        pang: "乓庞旁耪胖滂逄",
        pao: "抛咆刨炮袍跑泡匏狍庖脬疱",
        pei: "呸胚培裴赔陪配佩沛掊辔帔淠旆锫醅霈",
        pen: "喷盆湓",
        peng: "砰抨烹澎彭蓬棚硼篷膨朋鹏捧碰坯堋嘭怦蟛",
        pi: "砒霹批披劈琵毗啤脾疲皮匹痞僻屁譬丕陴邳郫圮鼙擗噼庀媲纰枇甓睥罴铍痦癖疋蚍貔",
        pian: "篇偏片骗谝骈犏胼褊翩蹁",
        piao: "飘漂瓢票剽嘌嫖缥殍瞟螵",
        pie: "撇瞥丿苤氕",
        pin: "拼频贫品聘拚姘嫔榀牝颦",
        ping: "乒坪苹萍平凭瓶评屏俜娉枰鲆",
        po: "坡泼颇婆破魄迫粕叵鄱溥珀钋钷皤笸",
        pou: "剖裒踣",
        pu: "扑铺仆莆葡菩蒲埔朴圃普浦谱曝瀑匍噗濮璞氆镤镨蹼",
        qi: "期欺栖戚妻七凄漆柒沏其棋奇歧畦崎脐齐旗祈祁骑起岂乞企启契砌器气迄弃汽泣讫亟亓圻芑萋葺嘁屺岐汔淇骐绮琪琦杞桤槭欹祺憩碛蛴蜞綦綮趿蹊鳍麒",
        qia: "掐恰洽葜",
        qian: "牵扦钎铅千迁签仟谦乾黔钱钳前潜遣浅谴堑嵌欠歉佥阡芊芡荨掮岍悭慊骞搴褰缱椠肷愆钤虔箝",
        qiang: "枪呛腔羌墙蔷强抢嫱樯戗炝锖锵镪襁蜣羟跫跄",
        qiao: "橇锹敲悄桥瞧乔侨巧鞘撬翘峭俏窍劁诮谯荞愀憔缲樵毳硗跷鞒",
        qie: "切茄且怯窃郄唼惬妾挈锲箧",
        qin: "钦侵亲秦琴勤芹擒禽寝沁芩蓁蕲揿吣嗪噙溱檎螓衾",
        qing: "青轻氢倾卿清擎晴氰情顷请庆倩苘圊檠磬蜻罄箐謦鲭黥",
        qiong: "琼穷邛茕穹筇銎",
        qiu: "秋丘邱球求囚酋泅俅氽巯艽犰湫逑遒楸赇鸠虬蚯蝤裘糗鳅鼽",
        qu: "趋区蛆曲躯屈驱渠取娶龋趣去诎劬蕖蘧岖衢阒璩觑氍祛磲癯蛐蠼麴瞿黢",
        quan: "圈颧权醛泉全痊拳犬券劝诠荃獾悛绻辁畎铨蜷筌鬈",
        que: "缺炔瘸却鹊榷确雀阙悫",
        qun: "裙群逡",
        ran: "然燃冉染苒髯",
        rang: "瓤壤攘嚷让禳穰",
        rao: "饶扰绕荛娆桡",
        ruo: "惹若弱",
        re: "热偌",
        ren: "壬仁人忍韧任认刃妊纫仞荏葚饪轫稔衽",
        reng: "扔仍",
        ri: "日",
        rong: "戎茸蓉荣融熔溶容绒冗嵘狨缛榕蝾",
        rou: "揉柔肉糅蹂鞣",
        ru: "茹蠕儒孺如辱乳汝入褥蓐薷嚅洳溽濡铷襦颥",
        ruan: "软阮朊",
        rui: "蕊瑞锐芮蕤睿蚋",
        run: "闰润",
        sa: "撒洒萨卅仨挲飒",
        sai: "腮鳃塞赛噻",
        san: "三叁伞散彡馓氵毵糁霰",
        sang: "桑嗓丧搡磉颡",
        sao: "搔骚扫嫂埽臊瘙鳋",
        se: "瑟色涩啬铩铯穑",
        sen: "森",
        seng: "僧",
        sha: "莎砂杀刹沙纱傻啥煞脎歃痧裟霎鲨",
        shai: "筛晒酾",
        shan: "珊苫杉山删煽衫闪陕擅赡膳善汕扇缮剡讪鄯埏芟潸姗骟膻钐疝蟮舢跚鳝",
        shang: "墒伤商赏晌上尚裳垧绱殇熵觞",
        shao: "梢捎稍烧芍勺韶少哨邵绍劭苕潲蛸笤筲艄",
        she: "奢赊蛇舌舍赦摄射慑涉社设厍佘猞畲麝",
        shen: "砷申呻伸身深娠绅神沈审婶甚肾慎渗诜谂吲哂渖椹矧蜃",
        sheng: "声生甥牲升绳省盛剩胜圣丞渑媵眚笙",
        shi: "师失狮施湿诗尸虱十石拾时什食蚀实识史矢使屎驶始式示士世柿事拭誓逝势是嗜噬适仕侍释饰氏市恃室视试谥埘莳蓍弑唑饣轼耆贳炻礻铈铊螫舐筮豕鲥鲺",
        shou: "收手首守寿授售受瘦兽扌狩绶艏",
        shu: "蔬枢梳殊抒输叔舒淑疏书赎孰熟薯暑曙署蜀黍鼠属术述树束戍竖墅庶数漱恕倏塾菽忄沭涑澍姝纾毹腧殳镯秫鹬",
        shua: "刷耍唰涮",
        shuai: "摔衰甩帅蟀",
        shuan: "栓拴闩",
        shuang: "霜双爽孀",
        shui: "谁水睡税",
        shun: "吮瞬顺舜恂",
        shuo: "说硕朔烁蒴搠嗍濯妁槊铄",
        si: "斯撕嘶思私司丝死肆寺嗣四伺似饲巳厮俟兕菥咝汜泗澌姒驷缌祀祠锶鸶耜蛳笥",
        song: "松耸怂颂送宋讼诵凇菘崧嵩忪悚淞竦",
        sou: "搜艘擞嗽叟嗖嗾馊溲飕瞍锼螋",
        su: "苏酥俗素速粟僳塑溯宿诉肃夙谡蔌嗉愫簌觫稣",
        suan: "酸蒜算",
        sui: "虽隋随绥髓碎岁穗遂隧祟蓑冫谇濉邃燧眭睢",
        sun: "孙损笋荪狲飧榫跣隼",
        suo: "梭唆缩琐索锁所唢嗦娑桫睃羧",
        ta: "塌他它她塔獭挞蹋踏闼溻遢榻沓",
        tai: "胎苔抬台泰酞太态汰邰薹肽炱钛跆鲐",
        tan: "坍摊贪瘫滩坛檀痰潭谭谈坦毯袒碳探叹炭郯蕈昙钽锬覃",
        tang: "汤塘搪堂棠膛唐糖傥饧溏瑭铴镗耥螗螳羰醣",
        thang: "倘躺淌",
        theng: "趟烫",
        tao: "掏涛滔绦萄桃逃淘陶讨套挑鼗啕韬饕",
        te: "特",
        teng: "藤腾疼誊滕",
        ti: "梯剔踢锑提题蹄啼体替嚏惕涕剃屉荑悌逖绨缇鹈裼醍",
        tian: "天添填田甜恬舔腆掭忝阗殄畋钿蚺",
        tiao: "条迢眺跳佻祧铫窕龆鲦",
        tie: "贴铁帖萜餮",
        ting: "厅听烃汀廷停亭庭挺艇莛葶婷梃蜓霆",
        tong: "通桐酮瞳同铜彤童桶捅筒统痛佟僮仝茼嗵恸潼砼",
        tou: "偷投头透亠",
        tu: "凸秃突图徒途涂屠土吐兔堍荼菟钍酴",
        tuan: "湍团疃",
        tui: "推颓腿蜕褪退忒煺",
        tun: "吞屯臀饨暾豚窀",
        tuo: "拖托脱鸵陀驮驼椭妥拓唾乇佗坨庹沱柝砣箨舄跎鼍",
        wa: "挖哇蛙洼娃瓦袜佤娲腽",
        wai: "歪外",
        wan: "豌弯湾玩顽丸烷完碗挽晚皖惋宛婉万腕剜芄苋菀纨绾琬脘畹蜿箢",
        wang: "汪王亡枉网往旺望忘妄罔尢惘辋魍",
        wei: "威巍微危韦违桅围唯惟为潍维苇萎委伟伪尾纬未蔚味畏胃喂魏位渭谓尉慰卫倭偎诿隈葳薇帏帷崴嵬猥猬闱沩洧涠逶娓玮韪軎炜煨熨痿艉鲔",
        wen: "瘟温蚊文闻纹吻稳紊问刎愠阌汶璺韫殁雯",
        weng: "嗡翁瓮蓊蕹",
        wo: "挝蜗涡窝我斡卧握沃莴幄渥杌肟龌",
        wu: "巫呜钨乌污诬屋无芜梧吾吴毋武五捂午舞伍侮坞戊雾晤物勿务悟误兀仵阢邬圬芴庑怃忤浯寤迕妩骛牾焐鹉鹜蜈鋈鼯",
        xi: "昔熙析西硒矽晰嘻吸锡牺稀息希悉膝夕惜熄烯溪汐犀檄袭席习媳喜铣洗系隙戏细僖兮隰郗茜葸蓰奚唏徙饩阋浠淅屣嬉玺樨曦觋欷熹禊禧钸皙穸蜥蟋舾羲粞翕醯鼷",
        xia: "瞎虾匣霞辖暇峡侠狭下厦夏吓掀葭嗄狎遐瑕硖瘕罅黠",
        xian: "锨先仙鲜纤咸贤衔舷闲涎弦嫌显险现献县腺馅羡宪陷限线冼藓岘猃暹娴氙祆鹇痫蚬筅籼酰跹",
        xiang: "相厢镶香箱襄湘乡翔祥详想响享项巷橡像向象芗葙饷庠骧缃蟓鲞飨",
        xiao: "萧硝霄削哮嚣销消宵淆晓小孝校肖啸笑效哓咻崤潇逍骁绡枭枵筱箫魈",
        xie: "楔些歇蝎鞋协挟携邪斜胁谐写械卸蟹懈泄泻谢屑偕亵勰燮薤撷廨瀣邂绁缬榭榍歙躞",
        xin: "薪芯锌欣辛新忻心信衅囟馨莘歆铽鑫",
        xing: "星腥猩惺兴刑型形邢行醒幸杏性姓陉荇荥擤悻硎",
        xiong: "兄凶胸匈汹雄熊芎",
        xiu: "休修羞朽嗅锈秀袖绣莠岫馐庥鸺貅髹",
        xu: "墟戌需虚嘘须徐许蓄酗叙旭序畜恤絮婿绪续讴诩圩蓿怵洫溆顼栩煦砉盱胥糈醑",
        xuan: "轩喧宣悬旋玄选癣眩绚儇谖萱揎馔泫洵渲漩璇楦暄炫煊碹铉镟痃",
        xue: "靴薛学穴雪血噱泶鳕",
        xun: "勋熏循旬询寻驯巡殉汛训讯逊迅巽埙荀薰峋徇浔曛窨醺鲟",
        ya: "压押鸦鸭呀丫芽牙蚜崖衙涯雅哑亚讶伢揠吖岈迓娅琊桠氩砑睚痖",
        yan: "焉咽阉烟淹盐严研蜒岩延言颜阎炎沿奄掩眼衍演艳堰燕厌砚雁唁彦焰宴谚验厣靥赝俨偃兖讠谳郾鄢芫菸崦恹闫阏洇湮滟妍嫣琰晏胭腌焱罨筵酽魇餍鼹",
        yang: "殃央鸯秧杨扬佯疡羊洋阳氧仰痒养样漾徉怏泱炀烊恙蛘鞅",
        yao: "邀腰妖瑶摇尧遥窑谣姚咬舀药要耀夭爻吆崾徭瀹幺珧杳曜肴鹞窈繇鳐",
        ye: "椰噎耶爷野冶也页掖业叶曳腋夜液谒邺揶馀晔烨铘",
        yi: "一壹医揖铱依伊衣颐夷遗移仪胰疑沂宜姨彝椅蚁倚已乙矣以艺抑易邑屹亿役臆逸肄疫亦裔意毅忆义益溢诣议谊译异翼翌绎刈劓佾诒圪圯埸懿苡薏弈奕挹弋呓咦咿噫峄嶷猗饴怿怡悒漪迤驿缢殪贻旖熠钇镒镱痍瘗癔翊衤蜴舣羿翳酏黟",
        yin: "茵荫因殷音阴姻吟银淫寅饮尹引隐印胤鄞堙茚喑狺夤氤铟瘾蚓霪龈",
        ying: "英樱婴鹰应缨莹萤营荧蝇迎赢盈影颖硬映嬴郢茔莺萦撄嘤膺滢潆瀛瑛璎楹鹦瘿颍罂",
        yo: "哟唷",
        yong: "拥佣臃痈庸雍踊蛹咏泳涌永恿勇用俑壅墉慵邕镛甬鳙饔",
        you: "幽优悠忧尤由邮铀犹油游酉有友右佑釉诱又幼卣攸侑莸呦囿宥柚猷牖铕疣蝣鱿黝鼬",
        yu: "迂淤于盂榆虞愚舆余俞逾鱼愉渝渔隅予娱雨与屿禹宇语羽玉域芋郁吁遇喻峪御愈欲狱育誉浴寓裕预豫驭禺毓伛俣谀谕萸蓣揄喁圄圉嵛狳饫庾阈妪妤纡瑜昱觎腴欤於煜燠聿钰鹆瘐瘀窳蝓竽舁雩龉",
        yuan: "鸳渊冤元垣袁原援辕园员圆猿源缘远苑愿怨院塬沅媛瑗橼爰眢鸢螈鼋",
        yue: "曰约越跃钥岳粤月悦阅龠樾刖钺",
        yun: "耘云郧匀陨允运蕴酝晕韵孕郓芸狁恽纭殒昀氲",
        za: "匝砸杂拶咂",
        zai: "栽哉灾宰载再在咱崽甾",
        zan: "攒暂赞瓒昝簪糌趱錾",
        zang: "赃脏葬奘戕臧",
        zao: "遭糟凿藻枣早澡蚤躁噪造皂灶燥唣缫",
        ze: "责择则泽仄赜啧迮昃笮箦舴",
        zei: "贼",
        zen: "怎谮",
        zeng: "增憎曾赠缯甑罾锃",
        zha: "扎喳渣札轧铡闸眨栅榨咋乍炸诈揸吒咤哳怍砟痄蚱齄",
        zhai: "摘斋宅窄债寨砦",
        zhan: "瞻毡詹粘沾盏斩辗崭展蘸栈占战站湛绽谵搌旃",
        zhang: "樟章彰漳张掌涨杖丈帐账仗胀瘴障仉鄣幛嶂獐嫜璋蟑",
        zhao: "招昭找沼赵照罩兆肇召爪诏棹钊笊",
        zhe: "遮折哲蛰辙者锗蔗这浙谪陬柘辄磔鹧褚蜇赭",
        zhen: "珍斟真甄砧臻贞针侦枕疹诊震振镇阵缜桢榛轸赈胗朕祯畛鸩",
        zheng: "蒸挣睁征狰争怔整拯正政帧症郑证诤峥钲铮筝",
        zhi: "芝枝支吱蜘知肢脂汁之织职直植殖执值侄址指止趾只旨纸志挚掷至致置帜峙制智秩稚质炙痔滞治窒卮陟郅埴芷摭帙忮彘咫骘栉枳栀桎轵轾攴贽膣祉祗黹雉鸷痣蛭絷酯跖踬踯豸觯",
        zhong: "中盅忠钟衷终种肿重仲众冢锺螽舂舯踵",
        zhou: "舟周州洲诌粥轴肘帚咒皱宙昼骤啄着倜诹荮鬻纣胄碡籀舳酎鲷",
        zhu: "珠株蛛朱猪诸诛逐竹烛煮拄瞩嘱主著柱助蛀贮铸筑住注祝驻伫侏邾苎茱洙渚潴驺杼槠橥炷铢疰瘃蚰竺箸翥躅麈",
        zhua: "抓",
        zhuai: "拽",
        zhuan: "专砖转撰赚篆抟啭颛",
        zhuang: "桩庄装妆撞壮状丬",
        zhui: "椎锥追赘坠缀萑骓缒",
        zhun: "谆准",
        zhuo: "捉拙卓桌琢茁酌灼浊倬诼廴蕞擢啜浞涿杓焯禚斫",
        zi: "兹咨资姿滋淄孜紫仔籽滓子自渍字谘嵫姊孳缁梓辎赀恣眦锱秭耔笫粢觜訾鲻髭",
        zong: "鬃棕踪宗综总纵腙粽",
        zou: "邹走奏揍鄹鲰",
        zu: "租足卒族祖诅阻组俎菹啐徂驵蹴",
        zuan: "钻纂攥缵",
        zui: "嘴醉最罪",
        zun: "尊遵撙樽鳟",
        zuo: "昨左佐柞做作坐座阝阼胙祚酢",
        cou: "薮楱辏腠",
        nang: "攮哝囔馕曩",
        o: "喔",
        dia: "嗲",
        chuai: "嘬膪踹",
        cen: "岑涔",
        diu: "铥",
        nou: "耨",
        fou: "缶",
        bia: "髟"
    };
    return function (e) {
        if ("" === e || void 0 === e || null === e)return "";
        for (var t = "", a = e.toLowerCase(), i = 0; i < a.length; i++) {
            var o = a.substr(i, 1), s = n(o), r = /[A-z0-9\-\_]/;
            r.test(o) ? t += o : s ? (i > 0 && (t += " "), t += s, i < a.length - 1 && (t += " ")) : t += " "
        }
        for (t = t.replace(/ /g, "-"); t.indexOf("--") > 0;)t = t.replace("--", "-");
        return t
    }
}]), angular.module("directives").directive("ndBlurred", function () {
    return {
        require: "ngModel", link: function (e, t, n, a) {
            a.$blurred = !0, t.on("focus", function () {
                e.$apply(function () {
                    a.$blurred = !1
                })
            }).on("blur", function () {
                e.$apply(function () {
                    a.$blurred = !0
                })
            })
        }
    }
}), angular.module("directives").directive("ndEditor", ["$templateCache", "$timeout", "$filter", "$http", "Upload", function (e, t, n, a, i) {
    return {
        restrict: "E",
        template: e.get("editor.view.html"),
        scope: {content: "=", disabled: "=", rows: "="},
        link: function (e, t, n, a) {
            "use strict";
            var i = null, o = e.$parent.mediaSelect;
            e.transmitting = !0, e.description = "", e.videoSource = "", e.insertVideo = function () {
                var t = i.getSelection(), n = i.getContent(), a = /\n$/.test(n.substr(0, t.start)), o = /^\n/.test(n.substr(t.end, n.length)), s = "";
                a || 0 === t.start || (s += "\n"), s += "\n" + e.videoSource + "\n", o || (s += "\n"), i.replaceSelection(s), $("#videoInsert").modal("hide"), e.videoSource = "", e.videoInsertForm.$setUntouched();
                var r = i.getContent().length - (n.length - t.end);
                i.setSelection(r, r), e.content = i.getContent()
            }, $("#content").markdown({
                resize: "vertical",
                iconlibrary: "fa",
                language: "zh",
                onShow: function (e) {
                    i = e
                },
                onChange: function (t) {
                    e.$apply(function () {
                        e.content = t.getContent()
                    })
                },
                buttons: [[{}, {
                    data: [{}, {
                        name: "cmdMedia",
                        title: "媒体库",
                        icon: {fa: "fa fa-archive"},
                        callback: function (t) {
                            o({}, function (n) {
                                var a = t.getSelection(), i = t.getContent(), o = /\n$/.test(i.substr(0, a.start)), s = /^\n/.test(i.substr(a.end, i.length)), r = "";
                                if (1 === n.length) {
                                    var c = a.text ? a.text : n[0].fileName;
                                    n[0].isImage ? (o || 0 === a.start || (r += "\n"), r += "\n![" + c + "](" + encodeURI(n[0].src) + ' "' + n[0].fileName + '")\n', s || (r += "\n")) : r += "[" + c + "](" + encodeURI(n[0].src) + ' "' + n[0].fileName + '")'
                                } else if (n.length > 1)for (var l = 0; l < n.length; l++)0 !== l || o || (r += "\n"), r += n[l].isImage ? "\n![" + n[l].fileName + "](" + encodeURI(n[l].src) + ' "' + n[l].fileName + '")\n' : "\n[" + n[l].fileName + "](" + encodeURI(n[l].src) + ' "' + n[l].fileName + '")\n', l !== n.length - 1 || s || (r += "\n");
                                t.replaceSelection(r);
                                var u = t.getContent().length - (i.length - a.end);
                                t.setSelection(u, u), e.content = t.getContent()
                            })
                        }
                    }, {
                        name: "cmdVideo",
                        title: "视频",
                        hotkey: "Ctrl+D",
                        icon: {fa: "fa fa-video-camera"},
                        callback: function (e) {
                            $("#videoInsert").modal("show")
                        }
                    }]
                }]]
            }), e.$watch("disabled", function () {
                $("#content").siblings(".btn-toolbar").find("button").prop("disabled", e.disabled)
            })
        }
    }
}]), angular.module("directives").directive("ndMediaSelect", ["$templateCache", "$timeout", "$filter", "$http", "Upload", function (e, t, n, a, i) {
    return {
        restrict: "E",
        replace: !0,
        template: e.get("media-select.view.html"),
        scope: {media: "="},
        link: function (e, t, n, o) {
            "use strict";
            function s() {
                var t;
                switch (e.selectView) {
                    case"list":
                        t = _.filter(e.media, {active: !0}).length;
                        break;
                    case"store":
                        t = _.filter(e.mediaStore, {active: !0}).length
                }
                e.selectLimit && e.selectLimit - t < 1 ? e.disabledUploadThumbnail = !0 : e.disabledUploadThumbnail = !1
            }

            function r() {
                e.mediaStore = [], a.get("/api/media", {params: {currentPage: 1, pageSize: 9}}).then(function (t) {
                    var n = t.data.media;
                    _.map(n, function (t) {
                        var date = new Date();
                        t.src = 'http://video.youka.youmengchuangxiang.com/'+'sinaVr/' + date.getFullYear()+ '' + (date.getMonth()+1) + date.getDate() + '/'+t.fileName;
                        var n = _.get(t.fileName.match(/^.+\.(\w+)$/), 1), a = {
                            file: null,
                            fileName: t.fileName,
                            fileNameLast: n,
                            isImage: !1,
                            description: t.description,
                            src:  t.src,
                            _id: t._id,
                            uploadStatus: "success",
                            active: !1,
                            edited: !1
                        };
                        switch (n) {
                            case"jpg":
                            case"jpeg":
                            case"png":
                            case"gif":
                                a.isImage = !0
                        }
                        e.mediaStore.push(a)
                    })
                })
            }

            e.transmitting = !0, e.mediaStore = [], e.selectView = "list", e.thumbnailInfoView = !1, e.medium = {}, e.mediumId = "", e.fileNameFirst = "", e.fileNameLast = "", e.description = "", e.disabledSelectViewRemove = !0, e.disabledSelectViewinsert = !0, e.selectLimit = 0, e.callback = null, e.disabledUploadThumbnail = !1, e.$parent.mediaSelect = function (n, a) {
                e.selectLimit = n.limit || null, e.callback = a || null, s(), t.modal("show")
            }, e.selectViewSlide = function (t) {
                e.thumbnailInfoView = !1, e.medium.edited = !1, _.map(e.media, function (e) {
                    return e.active = !1
                }), _.map(e.mediaStore, function (e) {
                    return e.active = !1
                }), e.disabledSelectViewRemove = !0, e.disabledSelectViewinsert = !0, s(), e.selectView = t
            }, e.thumbnailInfoSlide = function (t, n) {
                if (n.stopPropagation(), t._id !== e.mediumId) {
                    e.transmitting = !1, e.thumbnailInfoView = !0, e.medium.edited = !1, t.edited = !0, e.medium = t, e.mediumId = t._id;
                    var a = t.fileName.match(/^(.+)(\.\w+)$/);
                    e.fileNameFirst = _.get(a, 1), e.fileNameLast = _.get(a, 2), e.description = t.description
                } else e.thumbnailInfoView = !e.thumbnailInfoView, t.edited = !t.edited
            }, e.saveThumbnailInfo = function () {
                e.transmitting = !0;
                var t = {fileName: e.fileNameFirst + e.fileNameLast};
                e.description && (t.description = e.description), a.put("/api/media/" + e.mediumId, t).then(function () {
                    e.transmitting = !1, e.medium.fileName = _.clone(e.fileNameFirst + e.fileNameLast), e.medium.description = _.clone(e.description), e.$emit("notification", {
                        type: "success",
                        message: "图片信息保存成功"
                    })
                }, function () {
                    e.$emit("notification", {type: "danger", message: "图片信息保存失败"})
                })
            }, r(), e.uploadMedia = function (t) {

                return t ? (_.map(t, function (t) {
                    i.dataUrl(t).then(function (n) {
                        var date = new Date();
                        t.src = 'http://video.youka.youmengchuangxiang.com/'+'sinaVr/' + date.getFullYear()+ '' + (date.getMonth()+1) + date.getDate() + '/'+t.name;
                        var a = _.get(t.name.match(/^.+\.(\w+)$/), 1), i = {
                            file: n,
                            fileName:t.name,
                            fileNameLast: a,
                            isImage: !1,
                            src: t.src,
                            _id: "",
                            uploadStatus: "uploading",
                            active: !1,
                            edited: !1
                        };
                        switch (a) {
                            case"jpg":
                            case"jpeg":
                            case"png":
                            case"gif":
                                i.isImage = !0
                        }
                        e.media.push(i)
                    })

                }), void async.eachLimit(t, 3, function (t, n) {

                    i.upload({url: "/api/media", data: {file: t}}).then(function (a) {
                        var  callUrl = '';
                        $.get('/api/aly',function(data){
                            var client = new OSS.Wrapper({
                                region: 'oss-cn-beijing',
                                accessKeyId: data.AccessKeyId,
                                accessKeySecret: data.AccessKeySecret,
                                stsToken: data.SecurityToken,
                                bucket: 'gamecircle-video'
                            });
                            var date = new Date();
                            t.fileOssName = 'sinaVr/' + date.getFullYear()+ '' + (date.getMonth()+1) + date.getDate() + '/'+t.name;
                             client.multipartUpload(t.fileOssName, t).then(function (res) {
                                    t.fileOssUrl=res.url;
                                    var ossUpdate = {fileName:t.name,fileOssName:t.fileOssName,fileOssUrl:t.fileOssName,src:res.url};
                                    $.ajax({
                                        url: "/api/media/" + a.data._id,
                                        type: 'PUT',
                                        data:ossUpdate
                                        });
                            });
                        });
                        var o = a.data;
                        _.map(e.media, function (e) {
                            var date = new Date();
                            var    _src = 'http://video.youka.youmengchuangxiang.com/'+'sinaVr/' + date.getFullYear()+ '' + (date.getMonth()+1) + date.getDate() + '/'+e.fileName;
                            i.dataUrl(t).then(function (t) {
                                t === e.file && (e._id = o._id, e.src = _src, e.uploadStatus = "success")
                            })
                        }), r(), n(null)
                    }, function (e) {
                        n(e)
                    })
                }, function (t) {
                    t && e.$emit("notification", {type: "danger", message: "上传缩略图失败"})
                })) : !1
            }, t.on("hidden.bs.modal", function () {
                e.$apply(function () {
                    e.selectView = "list"
                })
            }), e.slideMediaActive = function (t) {
                if (t.active === !1 && e.disabledUploadThumbnail)return !1;
                switch (t.active = !t.active, e.selectView) {
                    case"list":
                        _.filter(e.media, function (e) {
                            return e.active
                        })[0] ? (e.disabledSelectViewRemove = !1, e.disabledSelectViewinsert = !1) : (e.disabledSelectViewRemove = !0, e.disabledSelectViewinsert = !0);
                        break;
                    case"store":
                        _.filter(e.mediaStore, function (e) {
                            return e.active
                        })[0] ? e.disabledSelectViewinsert = !1 : e.disabledSelectViewinsert = !0
                }
                s()
            }, e.removeMedia = function () {
                _.remove(e.media, function (e) {
                    return e.active
                }), e.disabledSelectViewRemove = !0, e.disabledSelectViewinsert = !0, s()
            }, e.addMedia = function () {
                _.map(e.mediaStore, function (t) {
                    if (t.active) {
                        var n = _.find(e.media, function (e) {
                            return e._id === t._id ? (e.active = !0, e) : void 0
                        });
                        n || e.media.unshift(t)
                    }
                });
                var n = _(e.media).filter(function (e) {
                    return e.active
                }).map(function (e) {
                    return _.pick(e, ["_id", "description", "fileName", "fileNameLast", "isImage", "src"])
                }).value();
                t.modal("hide"), e.callback(n), _.map(e.media, function (e) {
                    e.active = !1
                }), e.disabledSelectViewRemove = !0, e.disabledSelectViewinsert = !0, s()
            }
        }
    }
}]), angular.module("directives").directive("ndNavigation", ["$templateCache", "$rootScope", "$state", "$timeout", "$http", "$filter", "account", function (e, t, n, a, i, o, s) {
    return {
        restrict: "E", template: e.get("navigation.view.html"), link: function (e, r) {
            function c() {
                a(function () {
                    $(".sub-list").each(function () {
                        var e = $(this);
                        e.children(".item").hasClass("active") ? e.siblings(".item").addClass("active select") : e.slideUp("fast", function () {
                            e.siblings(".sub-list-heading").removeClass("select")
                        }).siblings(".sub-list-heading").removeClass("active")
                    })
                })
            }

            function l() {
                s.get().then(function (t) {
                    e.user = t
                }, function () {
                    e.$emit("notification", {type: "danger", message: "读取用户失败"})
                }), s.auths().then(function (t) {
                    e.auths = t
                }, function () {
                    e.$emit("notification", {type: "danger", message: "读取权限失败"})
                })
            }

            function u() {
                i.get("/api/categories").then(function (t) {
                    var n = t.data;
                    e.categories = o("filter")(n, function (e) {
                        return "channel" !== e.type && "link" !== e.type ? !0 : void 0
                    }), _.find(n, {
                        type: "page",
                        mixed: {isEdit: !0}
                    }) ? e.notFoundPages = !1 : e.notFoundPages = !0, _.find(n, {type: "column"}) ? e.notFoundContents = !1 : e.notFoundContents = !0, a(function () {
                        c()
                    })
                })
            }

            e.notFoundPages = !1, e.notFoundContents = !1, e.auth = {}, e.categories = [], e.user = {}, l(), e.signOut = function () {
                i.put("/api/account/sign-out").then(function () {
                    s.reset(), n.go("signIn")
                }, function () {
                    e.$emit("notification", {type: "danger", message: "退出登录失败"})
                })
            }, u(), t.$on("$stateChangeSuccess", function () {
                a(function () {
                    c()
                })
            }), t.$on("mainCategoriesUpdate", function () {
                u()
            }), t.$on("mainUserUpdate", function () {
                s.reset(), l()
            }), $(".navigation").on("click", ".sub-list-heading", function () {
                var e = $(this);
                e.hasClass("select") ? e.siblings(".sub-list").slideUp("fast", function () {
                    $(this).siblings(".sub-list-heading").removeClass("select")
                }) : e.siblings(".sub-list").slideDown("fast", function () {
                    $(this).siblings(".sub-list-heading").addClass("select")
                }), $(".sub-list:visible").not(e.siblings(".sub-list")).slideUp("fast", function () {
                    $(this).siblings(".sub-list-heading").removeClass("select")
                })
            })
        }
    }
}]), angular.module("directives").directive("ndNotification", ["$timeout", "$rootScope", function (e, t) {
    return {
        replace: !0, link: function (n) {
            function a() {
                i = !0, e(function () {
                    o-- > 0 ? a() : (i = !1, n.notificationShow = !1)
                }, 1e3)
            }

            var i, o;
            t.$on("notification", function (e, t) {
                o = 3, n.type = t.type, n.message = t.message, n.notificationShow = !0, i || a()
            })
        }
    }
}]), angular.module("directives").directive("ndPagination", ["$templateCache", function (e) {
    return {
        restrict: "E",
        template: e.get("pagination.view.html"),
        scope: {currentPage: "=", totalPages: "="},
        link: function (e, t, n) {
            e.pagesList = [], e.changePage = function () {
                switch (e.pagesList = [], !0) {
                    case e.totalPages <= 7:
                        for (var t = 0; t < e.totalPages; t++)e.pagesList[t] = {name: t + 1, index: t + 1};
                        break;
                    case e.currentPage <= 3:
                        e.pagesList = [{name: 1, index: 1}, {name: 2, index: 2}, {name: 3, index: 3}, {
                            name: 4,
                            index: 4
                        }, {name: 5, index: 5}, {name: 6, index: 6}, {name: "..." + e.totalPages, index: e.totalPages}];
                        break;
                    case e.currentPage > 3 && e.currentPage <= e.totalPages - 3:
                        e.pagesList.push({name: "1...", index: 1});
                        for (var t = e.currentPage - 2; t <= e.currentPage + 2; t++)e.pagesList.push({
                            name: t,
                            index: t
                        });
                        e.pagesList.push({name: "..." + e.totalPages, index: e.totalPages});
                        break;
                    case e.currentPage > e.totalPages - 3:
                        e.pagesList.push({name: "1...", index: 1});
                        for (var t = e.totalPages - 5; t <= e.totalPages; t++)e.pagesList.push({name: t, index: t})
                }
                $("body,html").scrollTop(0)
            }, e.$watchGroup(["currentPage", "totalPages"], function () {
                e.changePage()
            })
        }
    }
}]), angular.module("directives").directive("ndSame", function () {
    return {
        require: "ngModel", link: function (e, t, n, a) {
            t.add(n.ndSame).on("input", function () {
                e.$apply(function () {
                    var e = t.val() === $(n.ndSame).val();
                    a.$setValidity("same", e)
                })
            })
        }
    }
}), angular.module("directives").directive("ndThumbnail", ["$templateCache", "$timeout", "$filter", "$http", "Upload", "base64ToBlobFile", function (e, t, n, a, i, o) {
    return {
        restrict: "E",
        template: e.get("thumbnail.view.html"),
        scope: {thumbnail: "=", disabled: "=", width: "=", height: "="},
        link: function (e, t, n, a) {
            "use strict";
            e.thumbnail = {
                _id: e.thumbnail._id || null,
                file: null,
                sourceImage: "",
                croppedImage: e.thumbnail.croppedImage || "",
                uploadStatus: e.thumbnail.uploadStatus || "initial"
            }, e.minWidth = e.width / 2, e.minHeight = e.height / 2, e.cropThumbnail = function (t) {
                return _.isEmpty(t) ? !1 : (e.thumbnail.file = t[0], void i.dataUrl(e.thumbnail.file).then(function (t) {
                    e.thumbnail.sourceImage = t, $("#corpModal").modal("show")
                }))

            }, $("#corpModal").on("hide.bs.modal", function () {
                "initial" === e.thumbnail.uploadStatus && e.$apply(function () {
                    e.thumbnail = {_id: null, file: null, sourceImage: "", croppedImage: "", uploadStatus: "initial"}
                })
            }), e.uploadThumbnail = function () {

                e.thumbnail.uploadStatus = "uploading", i.upload({
                    url: "/api/media",
                    data: {file: o(e.thumbnail.croppedImage, e.thumbnail.file.name.replace(/\.\w+$/, "") + ".jpg", "image/jpeg")}
                }).then(function (t) {
                    $.get('/api/aly',function(data){
                        var client = new OSS.Wrapper({
                            region: 'oss-cn-beijing',
                            accessKeyId: data.AccessKeyId,
                            accessKeySecret: data.AccessKeySecret,
                            stsToken: data.SecurityToken,
                            bucket: 'gamecircle-video'
                        });
                        var date = new Date();
                        e.thumbnail.file.fileOssName = 'sinaVr/' + date.getFullYear()+ '' + (date.getMonth()+1) + date.getDate() + '/'+e.thumbnail.file.name;
                        client.multipartUpload(e.thumbnail.file.fileOssName, e.thumbnail.file).then(function (res) {
                            var ossUpdate = {fileName:e.thumbnail.file.name,fileOssName:e.thumbnail.file.fileOssName,fileOssUrl:e.thumbnail.file.fileOssName};
                            $.ajax({
                                url: "/api/media/" + t.data._id,
                                type: 'PUT',
                                data:ossUpdate
                            });

                        });
                    });

                    var n = t.data;
                    e.thumbnail.uploadStatus = "success", e.thumbnail._id = n._id
                }, function () {
                    e.$emit("notification", {type: "danger", message: "缩略图上传失败"})
                }), $("#corpModal").modal("hide")
            }, e.removeThumbnail = function () {
                e.thumbnail = {_id: null, file: null, sourceImage: "", croppedImage: "", uploadStatus: "initial"}
            }
        }
    }
}]), angular.module("directives").directive("ndVcallname", ["$http", function (e) {
    "use strict";
    return {
        require: "ngModel", link: function (t, n, a, i) {
            function o() {
                var o = n.val(), s = t.$eval(a.oldCallname);
                return o === s ? i.$setValidity("vCallname", !0) : (t.inputing = !1, t.checkCallnameing = !0, void e.get("/api/models", {
                    params: {
                        type: "feature",
                        "mixed.callname": o
                    }
                }).then(function (e) {
                    e.data[0] ? i.$setValidity("vcallname", !1) : i.$setValidity("vcallname", !0), t.checkCallnameing = !1
                }, function () {
                    t.$emit("notification", {type: "danger", message: "调用名验证未知错误"}), t.checkCallnameing = !1
                }))
            }

            i.$setValidity("vcallname", !0), n.on("input", function () {
                t.$apply(function () {
                    t.inputing = !0
                })
            }).on("blur", function () {
                t.$apply(function () {
                    o()
                })
            })
        }
    }
}]), angular.module("directives").directive("ndVdirectory", ["$http", function (e) {
    "use strict";
    return {
        require: "ngModel", scope: {prePath: "=", oldPath: "="}, link: function (t, n, a, i) {
            function o() {
                var a = t.prePath, o = n.val().toLowerCase(), s = t.oldPath;
                t.inputing = !1, t.checkDirectorying = !0;
                var r = ["admin", "api", "openapi", "open", "themes", "media", "assets"];
                if (!a)for (var c = 0; c < r.length; c++)if (o === r[c])return t.checkDirectorying = !1, i.$setValidity("vdirectory", !1);
                var l;
                return l = a ? a + "/" + o : "/" + o, l === s ? i.$setValidity("vdirectory", !0) : void e.get("/api/categories", {params: {path: l}}).then(function (e) {
                    var n = e.data;
                    n ? i.$setValidity("vdirectory", !1) : i.$setValidity("vdirectory", !0), t.checkDirectorying = !1
                }, function () {
                    t.$emit("notification", {type: "danger", message: "目录名验证未知错误"}), t.checkDirectorying = !1
                })
            }

            i.$setValidity("vdirectory", !0), t.$watch("prePath", function (e, t) {
                e !== t && o()
            }), n.on("input", function () {
                t.$apply(function () {
                    t.inputing = !0
                })
            }).on("blur", function () {
                t.$apply(function () {
                    o()
                })
            })
        }
    }
}]), angular.module("directives").directive("ndVemail", ["$http", function (e) {
    "use strict";
    return {
        require: "ngModel", link: function (t, n, a, i) {
            n.on("input", function () {
                t.$apply(function () {
                    t.inputing = !0
                })
            }).on("blur", function () {
                t.$eval(a.ndVemail) ? t.$apply(function () {
                    t.inputing = !1, t.checkEmailing = !0, e.get("/api/users", {params: {email: n.val()}}).then(function (e) {
                        e.data ? i.$setValidity("vemail", !1) : i.$setValidity("vemail", !0), t.checkEmailing = !1
                    }, function () {
                        t.$emit("notification", {type: "danger", message: "邮箱验证未知错误"}), t.checkEmailing = !1
                    })
                }) : t.$apply(function () {
                    i.$setValidity("vemail", !0)
                })
            })
        }
    }
}]), angular.module("filters").filter("thumbnailSrc", function () {
    return function (e) {
        return e ? thumbnailSrc : void 0;//"/media/" + moment(e.date).format("YYYYMM") + "/" + e._id + "/" + e.fileName : void 0
    }
}), angular.module("filters").filter("translate", function () {
    return function (e, t) {
        if (!(_.isObject(t) && t.display && t.same && t.source))return e;
        var n = _.find(t.source, function (n) {
            return n[t.same] == e
        });
        return n[t.display]
    }
}), angular.module("filters").filter("words", function () {
    return function (e, t) {
        return e && e.length > t && (e = e.substr(0, parseInt(t, 10) - 3) + "..."), e
    }
});