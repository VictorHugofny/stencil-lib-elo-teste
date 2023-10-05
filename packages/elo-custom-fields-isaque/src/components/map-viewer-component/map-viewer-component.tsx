/* eslint-disable @stencil-community/own-props-must-be-private */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @stencil-community/required-jsdoc */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { Component, Host, h, Prop, Event, EventEmitter, Listen, State } from '@stencil/core';
import { getEmbeddedFieldAttributes, OneApi, FormFieldDidChangeValueDetail } from '@sydle/sydle-one-components';
import type { FieldComponent } from '@sydle/sydle-one-components';
import './style.css';

import '../../assets/polyfills.2960fb68898cf424.js';
import '../../assets/runtime.dc378bf1fd07472e.js';
import '../../assets/main.b5566eb63baf5645.js';
// @EventEmitter enviar um evento para o backoffice
// @listen escutar algum evento sendo interno ou externo ao frontend

@Component({
  tag: 'elo-map-viewer-component',
  styleUrl: 'scss/index.scss',
  shadow: true,
})

export class MapViewerComponent implements FieldComponent {
  @Prop() field: any;
  @Prop() value: any;
  @Prop() valuePath?: string;
  @Event() syOneFormFieldDidChangeValue?: EventEmitter<FormFieldDidChangeValueDetail>;
  teste: any;
	@State() paramsMapViewer: any = {
		"mapId": "",
		"title": "Mapa report 6",
		"baseMap": {
			"title": "titulo da camada",
			"type": "bing",
			"zIndex": 0,
			"key": "AsQMFShoIU3hEnknwia7vT_d3fL8X2dO6V3HZX57-Tfzp_jBdFvizuyqjTahBhkC",
			"imagerySet": "Aerial",
			"viewParams": []
		},
		"centerCoords": [
			-56.9447,
			-1.313
		],
		"projection": "EPSG:4674",
		"extent": [
			-58.8955,
			-9.8412,
			-46.07,
			4.4707
		],
		"defaultZoom": 1,
		"maxZoom": 19,
		"controls": {
			"fullScreen": true,
			"zoomInOut": true,
			"currentLocation": true,
			"zoomExtent": true,
			"scale": true,
			"scaleLine": true,
			"basemap": true,
			"rotate": true
		},
		"layers": {
			"sources": [
				{
					"title": "Municípios",
					"layerUrl": "https://geoserver.apps.geoapplications.net/geoserver/wms",
					"layerIdentifier": [
						"semas_car2_hom:vw_camada_municipios"
					],
					"permissions": [
						"view",
						"hide",
						"..."
					],
					"primary": false,
					"type": "geoserver",
					"zIndex": 5,
					"boundingBox": [],
					"sourceType": "wms",
					"descriptionFields": [
						{
							"displayName": "Município",
							"key": "tx_nome_municipio"
						},
						{
							"displayName": "Sigla do Estado",
							"key": "tx_sigla_municipio"
						},
						{
							"displayName": "Área",
							"key": "area_km2"
						}
					],
					"viewParams": []
				},
				// {
				//     "title": "Unidades da federação",
				//     "layerUrl": "https://geoserver.apps.geoapplications.net/geoserver/wms",
				//     "layerIdentifier": [
				//         "semas_car2_hom:vw_camada_ufs"
				//     ],
				//     "permissions": [
				//         "view",
				//         "hide",
				//         "..."
				//     ],
				//     "primary": false,
				//     "type": "geoserver",
				//     "zIndex": 10,
				//     "boundingBox": [],
				//     "sourceType": "wms",
				//     "descriptionFields": [
				//         {
				//             "displayName": "Nome da UF",
				//             "key": "tx_nome_uf"
				//         },
				//         {
				//             "displayName": "Sigla",
				//             "key": "tx_sigla_uf"
				//         },
				//         {
				//             "displayName": "Região",
				//             "key": "nm_regiao"
				//         }
				//     ],
				//     "viewParams": []
				// },
				// {
				//     "title": "Imóveis",
				//     "layerUrl": "https://geoserver.apps.geoapplications.net/geoserver/wms",
				//     "layerIdentifier": [
				//         "semas_car2_hom:geo_vw_imoveis"
				//     ],
				//     "permissions": [
				//         "view",
				//         "hide",
				//         "..."
				//     ],
				//     "visible": true,
				//     "zoomOnInit": true,
				//     "primary": false,
				//     "type": "geoserver",
				//     "zIndex": 9,
				//     "boundingBox": [
				//         -56.9447,
				//         -1.313,
				//         -56.9013,
				//         -1.2805
				//     ],
				//     "sourceType": "wms",
				//     "descriptionFields": [
				//         {
				//             "displayName": "Nome do Imóvel",
				//             "key": "tx_nome_imovel"
				//         },
				//         {
				//             "displayName": "Código do Imóvel",
				//             "key": "tx_cod_imovel"
				//         },
				//         {
				//             "displayName": "Status",
				//             "key": "tx_status_imovel"
				//         },
				//         {
				//             "displayName": "Tipo",
				//             "key": "tx_tipo_imovel"
				//         },
				//         {
				//             "displayName": "Número módulo fiscal",
				//             "key": "num_modulo_fiscal"
				//         },
				//         {
				//             "displayName": "Condição",
				//             "key": "tx_des_condicao"
				//         },
				//         {
				//             "displayName": "Área",
				//             "key": "area_calc_ir"
				//         }
				//     ],
				//     "viewParams": [
				//         "id_imovel:122161"
				//     ]
				// },
				// {
				//     "title": "Imóvel fora município de cadastro",
				//     "layerUrl": "https://geoserver.apps.geoapplications.net/geoserver/wms",
				//     "visible": true,
				//     "layerIdentifier": [
				//         "semas_car2_hom:geo_vw_detalhe_imovel_fora_municipio"
				//     ],
				//     "permissions": [
				//         "view",
				//         "hide",
				//         "..."
				//     ],
				//     "primary": false,
				//     "type": "geoserver",
				//     "zIndex": 8,
				//     "boundingBox": [
				//         -57.218,
				//         -1.4919,
				//         -56.8463,
				//         -1.1668
				//     ],
				//     "sourceType": "wms",
				//     "descriptionFields": [
				//         {
				//             "displayName": "Cod. Imovel Vizinho",
				//             "key": "cod_imovel_vizinho"
				//         },
				//         {
				//             "displayName": "Orgão Responsável",
				//             "key": "tx_orgao_resp"
				//         },
				//         {
				//             "displayName": "Data da última análise",
				//             "key": "data_ultima_analise"
				//         }
				//     ],
				//     "viewParams": [
				//         "id_imovel:122161"
				//     ]
				// }
			]
		}
	};

  // É chamado para os componentes da SydleUI
  @Listen('syInputDidChange')
  inputHandler(event: any) {
    console.log('entrou aqui');
    console.log(event);
  }

  // É chamado para os campos internos do Sydle
  @Listen('syOneFormFieldDidChangeValue')
  formChange(event: any) {
    const source = event;
    console.log('alteração');
    console.log(source.detail.value);
  }

  // É chamado para o evento de um arquivo
  @Listen('syOneFileFieldDidUpload')
  fileUpload(event: any) {
    console.log('arquivo SYDLE');
    console.log('evento', event);
    console.log('value', this.value);

    //
  }

  async componentWillLoad() {
    const res = await OneApi.objectAPI.get({ _classId: '64f66dd6c0f74d38e84af28c', _id: '622b71f3cc08e97305681ea3' });
    console.log(this.field);

    // this.patchItem('teste', '12345456654');
  }

  componentWillRender() {}

  // eslint-disable-next-line @stencil-community/own-methods-must-be-private, @typescript-eslint/explicit-module-boundary-types
  patchItem(fieldName: string, value: string) {
    // FieldName indetificador do campo que deseja da patch
    // value valor a ser trocado no destino
    const event = this.syOneFormFieldDidChangeValue?.emit({
      value,
      options: { customPath: `${this.valuePath}.${fieldName}` },
    });

    return console.log(event?.returnValue);
  }

  render() {
    return (
      <Host>
        <h1>Teste</h1>
        <h1>Teste</h1>

        <sy-one-field
          {...getEmbeddedFieldAttributes(this.field, this.value, String(this.valuePath), 'arquivo')}
        ></sy-one-field>
        <sy-one-field
          {...getEmbeddedFieldAttributes(this.field, this.value, String(this.valuePath), 'arquivo')}
        ></sy-one-field>
        <web-map-viewer
          params={this.paramsMapViewer}
        />
        {/* <div>
        <sy-button
          content="icon-left"
          label="Button"
          icon="rating-star"
          type="default"
          target="_blank"
          button-type="button"
        ></sy-button>
      </div>

        <sy-one-field
          {...getEmbeddedFieldAttributes(this.field, this.value, String(this.valuePath), 'teste')}
          field={{ defaultValue: 'teste' }}
        ></sy-one-field>




        <sy-input label="Label" placeholder="Placeholder" icon="rating-star" icon-position="left" type="text">
          <sy-icon name="house-1" slot="icon"></sy-icon>
        </sy-input>

        <h1>teste</h1> */}
      </Host>
    );
  }
}
