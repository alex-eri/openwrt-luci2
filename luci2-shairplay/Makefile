include $(TOPDIR)/rules.mk

PKG_NAME:=luci2-shairplay
PKG_RELEASE:=1

include $(INCLUDE_DIR)/package.mk

define Package/luci2-shairplay
  SECTION:=luci2
  CATEGORY:=LuCI2
  TITLE:=LuCI2 shairplay module
  DEPENDS:=luci2 +shairplay
endef

define Package/luci2-shairplay/description
  LuCI2 module for shairplay
endef

define Build/Compile
endef

define Package/luci2-shairplay/install
	$(INSTALL_DIR) $(1)/usr/share/rpcd/menu.d
	$(INSTALL_DATA) ./files/usr/share/rpcd/menu.d/services.shairplay.json $(1)/usr/share/rpcd/menu.d/

	$(INSTALL_DIR) $(1)/usr/share/rpcd/acl.d
	$(INSTALL_DATA) ./files/usr/share/rpcd/acl.d/services.shairplay.json $(1)/usr/share/rpcd/acl.d/

	$(INSTALL_DIR) $(1)/www/luci2/template
	$(INSTALL_DATA) ./files/www/luci2/template/services.shairplay.htm $(1)/www/luci2/template

	$(INSTALL_DIR) $(1)/www/luci2/view
	$(INSTALL_DATA) ./files/www/luci2/view/services.shairplay.js $(1)/www/luci2/view
endef

$(eval $(call BuildPackage,luci2-shairplay))
