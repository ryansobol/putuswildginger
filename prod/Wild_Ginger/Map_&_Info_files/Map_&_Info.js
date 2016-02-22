// Created by iWeb 3.0.1 local-build-20091118

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWPhotoFrame([IWCreateImage('Map_%26_Info_files/Pushpin_01.jpg'),IWCreateImage('Map_%26_Info_files/Pushpin_02.jpg'),IWCreateImage('Map_%26_Info_files/Pushpin_03.jpg'),IWCreateImage('Map_%26_Info_files/Pushpin_06.jpg'),IWCreateImage('Map_%26_Info_files/Pushpin_09.jpg'),IWCreateImage('Map_%26_Info_files/Pushpin_02_1.jpg'),IWCreateImage('Map_%26_Info_files/Pushpin_03_1.jpg'),IWCreateImage('Map_%26_Info_files/Pushpin_04.jpg')],null,1,0.707895,0.000000,0.000000,0.000000,0.000000,18.000000,18.000000,18.000000,18.000000,298.000000,472.000000,298.000000,472.000000,'Map_%26_Info_files/bullet_pp_3.png',new IWPoint(0.500000,-10),new IWSize(45,65),0.100000)});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Map_&_Info_files/Map_&_InfoMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');fixAllIEPNGs('Media/transparent.gif');Widget.onload();fixupAllIEPNGBGs();IMpreload('Map_&_Info_files','shapeimage_3','0');IMpreload('Map_&_Info_files','shapeimage_3','1');applyEffects()}
function onPageUnload()
{Widget.onunload();}
