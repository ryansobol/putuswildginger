// Created by iWeb 3.0.1 local-build-20091021

function writeMovie1()
{detectBrowser();if(windowsInternetExplorer)
{document.write('<object id="id4" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="423" height="333" style="height: 333px; left: 68px; position: absolute; top: 21px; width: 423px; z-index: 1; "><param name="src" value="../../Media/Smoked%20Duck%20Feast%20MOV-1.mov" /><param name="controller" value="true" /><param name="autoplay" value="false" /><param name="scale" value="tofit" /><param name="volume" value="100" /><param name="loop" value="false" /></object>');}
else if(isiPhone)
{document.write('<object id="id4" type="video/quicktime" width="423" height="333" style="height: 333px; left: 68px; position: absolute; top: 21px; width: 423px; z-index: 1; "><param name="src" value="Smoked_Duck_Feast_files/Smoked%20Duck%20Feast%20MOV.jpg"/><param name="target" value="myself"/><param name="href" value="../../../Media/Smoked%20Duck%20Feast%20MOV-1.mov"/><param name="controller" value="true"/><param name="scale" value="tofit"/></object>');}
else
{document.write('<object id="id4" type="video/quicktime" width="423" height="333" data="../../Media/Smoked%20Duck%20Feast%20MOV-1.mov" style="height: 333px; left: 68px; position: absolute; top: 21px; width: 423px; z-index: 1; "><param name="src" value="../../Media/Smoked%20Duck%20Feast%20MOV-1.mov"/><param name="controller" value="true"/><param name="autoplay" value="false"/><param name="scale" value="tofit"/><param name="volume" value="100"/><param name="loop" value="false"/></object>');}}
setTransparentGifURL('../../Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWPhotoFrame([IWCreateImage('Smoked_Duck_Feast_files/PrintedPaper_frame_01.png'),IWCreateImage('Smoked_Duck_Feast_files/PrintedPaper_frame_02.png'),IWCreateImage('Smoked_Duck_Feast_files/PrintedPaper_frame_03.png'),IWCreateImage('Smoked_Duck_Feast_files/PrintedPaper_frame_06.png'),IWCreateImage('Smoked_Duck_Feast_files/PrintedPaper_frame_09.png'),IWCreateImage('Smoked_Duck_Feast_files/PrintedPaper_frame_08.png'),IWCreateImage('Smoked_Duck_Feast_files/PrintedPaper_frame_07.png'),IWCreateImage('Smoked_Duck_Feast_files/PrintedPaper_frame_04.png')],null,0,1.000000,0.000000,0.000000,0.000000,0.000000,6.000000,6.000000,6.000000,6.000000,9.000000,9.000000,9.000000,9.000000,null,null,null,0.500000),shadow_0:new IWShadow({blurRadius:5,offset:new IWPoint(-0.0000,1.0000),color:'#000000',opacity:0.500000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Smoked_Duck_Feast_files/Smoked_Duck_FeastMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');fixAllIEPNGs('../../Media/transparent.gif');Widget.onload();fixupAllIEPNGBGs();applyEffects()}
function onPageUnload()
{Widget.onunload();}
