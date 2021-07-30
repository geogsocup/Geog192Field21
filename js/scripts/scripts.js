var highlightLayer;
        function highlightFeature(e) {
            highlightLayer = e.target;

            if (e.target.feature.geometry.type === 'LineString') {
              highlightLayer.setStyle({
                color: '#ffff00',
              });
            } else {
              highlightLayer.setStyle({
                fillColor: '#ffff00',
                fillOpacity: 1
              });
            }
        }
        var map = L.map('map', {
            zoomControl:true, maxZoom:28, minZoom:12
        }).fitBounds([[13.257991713400264,123.57732476321142],[13.39989214795175,123.85198115571727]]);
        var hash = new L.Hash(map);
        map.attributionControl.setPrefix('<a href="https://github.com/tomchadwin/qgis2web" target="_blank">qgis2web</a> &middot; <a href="https://leafletjs.com" title="A JS library for interactive maps">Leaflet</a> &middot; <a href="https://qgis.org">QGIS</a>');
        var autolinker = new Autolinker({truncate: {length: 30, location: 'smart'}});
        var bounds_group = new L.featureGroup([]);
        function setBounds() {
            map.setMaxBounds(map.getBounds());
        }
        map.createPane('pane_CartoLightcopy_0');
        map.getPane('pane_CartoLightcopy_0').style.zIndex = 400;
        var layer_CartoLightcopy_0 = L.tileLayer('https://a.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}@2x.png', {
            pane: 'pane_CartoLightcopy_0',
            opacity: 1.0,
            attribution: '',
            minZoom: 12,
            maxZoom: 28,
            minNativeZoom: 0,
            maxNativeZoom: 18
        });
        layer_CartoLightcopy_0;
        map.addLayer(layer_CartoLightcopy_0);
        map.createPane('pane_CartoLight_1');
        map.getPane('pane_CartoLight_1').style.zIndex = 401;
        var layer_CartoLight_1 = L.tileLayer('https://a.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}@2x.png', {
            pane: 'pane_CartoLight_1',
            opacity: 1.0,
            attribution: '',
            minZoom: 12,
            maxZoom: 28,
            minNativeZoom: 0,
            maxNativeZoom: 18
        });
        layer_CartoLight_1;
        map.addLayer(layer_CartoLight_1);
        function pop_Tabaco_city_barangays_2(feature, layer) {
            layer.on({
                mouseout: function(e) {
                    for (i in e.target._eventParents) {
                        e.target._eventParents[i].resetStyle(e.target);
                    }
                },
                mouseover: highlightFeature,
            });
            var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['fid'] !== null ? autolinker.link(feature.properties['fid'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Name'] !== null ? autolinker.link(feature.properties['Name'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Area'] !== null ? autolinker.link(feature.properties['Area'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Other'] !== null ? autolinker.link(feature.properties['Other'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['layer'] !== null ? autolinker.link(feature.properties['layer'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['path'] !== null ? autolinker.link(feature.properties['path'].toLocaleString()) : '') + '</td>\
                    </tr>\
                </table>';
            layer.bindPopup(popupContent, {maxHeight: 400});
        }

        function style_Tabaco_city_barangays_2_0() {
            return {
                pane: 'pane_Tabaco_city_barangays_2',
                opacity: 1,
                color: 'rgba(64,85,8,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(40,126,35,0.4)',
                interactive: false,
            }
        }
        map.createPane('pane_Tabaco_city_barangays_2');
        map.getPane('pane_Tabaco_city_barangays_2').style.zIndex = 402;
        map.getPane('pane_Tabaco_city_barangays_2').style['mix-blend-mode'] = 'normal';
        var layer_Tabaco_city_barangays_2 = new L.geoJson(json_Tabaco_city_barangays_2, {
            attribution: '',
            interactive: false,
            dataVar: 'json_Tabaco_city_barangays_2',
            layerName: 'layer_Tabaco_city_barangays_2',
            pane: 'pane_Tabaco_city_barangays_2',
            onEachFeature: pop_Tabaco_city_barangays_2,
            style: style_Tabaco_city_barangays_2_0,
        });
        bounds_group.addLayer(layer_Tabaco_city_barangays_2);
        map.addLayer(layer_Tabaco_city_barangays_2);
        function pop_Tabaco_city_outline_3(feature, layer) {
            layer.on({
                mouseout: function(e) {
                    for (i in e.target._eventParents) {
                        e.target._eventParents[i].resetStyle(e.target);
                    }
                },
                mouseover: highlightFeature,
            });
            var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['fid'] !== null ? autolinker.link(feature.properties['fid'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2"><strong>Name</strong><br />' + (feature.properties['Name'] !== null ? autolinker.link(feature.properties['Name'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Area'] !== null ? autolinker.link(feature.properties['Area'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Other'] !== null ? autolinker.link(feature.properties['Other'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['layer'] !== null ? autolinker.link(feature.properties['layer'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['path'] !== null ? autolinker.link(feature.properties['path'].toLocaleString()) : '') + '</td>\
                    </tr>\
                </table>';
            layer.bindPopup(popupContent, {maxHeight: 400});
        }

        function style_Tabaco_city_outline_3_0() {
            return {
                pane: 'pane_Tabaco_city_outline_3',
                opacity: 1,
                color: 'rgba(134,85,1,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 2.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(141,90,153,0.0)',
                interactive: false,
            }
        }
        map.createPane('pane_Tabaco_city_outline_3');
        map.getPane('pane_Tabaco_city_outline_3').style.zIndex = 403;
        map.getPane('pane_Tabaco_city_outline_3').style['mix-blend-mode'] = 'normal';
        var layer_Tabaco_city_outline_3 = new L.geoJson(json_Tabaco_city_outline_3, {
            attribution: '',
            interactive: false,
            dataVar: 'json_Tabaco_city_outline_3',
            layerName: 'layer_Tabaco_city_outline_3',
            pane: 'pane_Tabaco_city_outline_3',
            onEachFeature: pop_Tabaco_city_outline_3,
            style: style_Tabaco_city_outline_3_0,
        });
        bounds_group.addLayer(layer_Tabaco_city_outline_3);
        map.addLayer(layer_Tabaco_city_outline_3);
        function pop_heritage_trees_4(feature, layer) {
            layer.on({
                mouseout: function(e) {
                    for (i in e.target._eventParents) {
                        e.target._eventParents[i].resetStyle(e.target);
                    }
                },
                mouseover: highlightFeature,
            });
            var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['fid'] !== null ? autolinker.link(feature.properties['fid'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['id'] !== null ? autolinker.link(feature.properties['id'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['lat'] !== null ? autolinker.link(feature.properties['lat'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['long'] !== null ? autolinker.link(feature.properties['long'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2"><strong>latin_name</strong><br />' + (feature.properties['latin_name'] !== null ? autolinker.link(feature.properties['latin_name'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">native</th>\
                        <td>' + (feature.properties['native'] !== null ? autolinker.link(feature.properties['native'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">barangay</th>\
                        <td>' + (feature.properties['barangay'] !== null ? autolinker.link(feature.properties['barangay'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">note</th>\
                        <td>' + (feature.properties['note'] !== null ? autolinker.link(feature.properties['note'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">local_name</th>\
                        <td>' + (feature.properties['local_name'] !== null ? autolinker.link(feature.properties['local_name'].toLocaleString()) : '') + '</td>\
                    </tr>\
                </table>';
            layer.bindPopup(popupContent, {maxHeight: 400});
        }

        function style_heritage_trees_4_0() {
            return {
                pane: 'pane_heritage_trees_4',
                shape: 'diamond',
                radius: 8.000000000000002,
                opacity: 1,
                color: 'rgba(61,128,53,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 2.0,
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(84,176,74,1.0)',
                interactive: true,
            }
        }
        map.createPane('pane_heritage_trees_4');
        map.getPane('pane_heritage_trees_4').style.zIndex = 404;
        map.getPane('pane_heritage_trees_4').style['mix-blend-mode'] = 'normal';
        var layer_heritage_trees_4 = new L.geoJson(json_heritage_trees_4, {
            attribution: '',
            interactive: true,
            dataVar: 'json_heritage_trees_4',
            layerName: 'layer_heritage_trees_4',
            pane: 'pane_heritage_trees_4',
            onEachFeature: pop_heritage_trees_4,
            pointToLayer: function (feature, latlng) {
                var context = {
                    feature: feature,
                    variables: {}
                };
                return L.shapeMarker(latlng, style_heritage_trees_4_0(feature));
            },
        });
        var cluster_heritage_trees_4 = new L.MarkerClusterGroup({showCoverageOnHover: false,
            spiderfyDistanceMultiplier: 2});
        cluster_heritage_trees_4.addLayer(layer_heritage_trees_4);

        bounds_group.addLayer(layer_heritage_trees_4);
        cluster_heritage_trees_4.addTo(map);
        setBounds();
        var i = 0;
        layer_Tabaco_city_barangays_2.eachLayer(function(layer) {
            var context = {
                feature: layer.feature,
                variables: {}
            };
            layer.bindTooltip((layer.feature.properties['Name'] !== null?String('<div style="color: #000000; font-size: 10pt; font-family: \'Segoe UI Light\', sans-serif;">' + layer.feature.properties['Name']) + '</div>':''), {permanent: true, offset: [-0, -16], className: 'css_Tabaco_city_barangays_2'});
            labels.push(layer);
            totalMarkers += 1;
              layer.added = true;
              addLabel(layer, i);
              i++;
        });
        resetLabels([layer_Tabaco_city_barangays_2]);
        map.on("zoomend", function(){
            resetLabels([layer_Tabaco_city_barangays_2]);
        });
        map.on("layeradd", function(){
            resetLabels([layer_Tabaco_city_barangays_2]);
        });
        map.on("layerremove", function(){
            resetLabels([layer_Tabaco_city_barangays_2]);
        });