# Simple Notion API Clone
## This is a simple Notion API clone, made with Typescript, Express, Prisma ORM

![image](https://user-images.githubusercontent.com/46490801/182064509-56edeb5b-36cb-4ab8-9901-b5b66de1adcd.png)

## Return a simple schema, like:

```json
{
	"pages": [
		{
			"object": "page",
			"id": "62e7389b609f6a36324931f9",
			"cover": {
				"link": {
					"url": "https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
				},
				"name": "cover image"
			},
			"icon": "👏",
			"property": {
				"Name": {
					"type": "heading_1",
					"text": {
						"content": "Notion Page",
						"link": null
					},
					"annotations": {
						"italic": false,
						"bold": false,
						"code": false,
						"underline": false,
						"color": "#333",
						"link": null
					},
					"checked": false,
					"language": null
				},
				"Description": {
					"type": "heading_3",
					"text": {
						"content": "Notion Page description",
						"link": null
					},
					"annotations": {
						"italic": false,
						"bold": false,
						"code": false,
						"underline": false,
						"color": "#ddd",
						"link": null
					},
					"checked": false,
					"language": null
				}
			},
			"name": "Notion page updated",
			"url": "http://localhost:3000/page/slug/notion-page-updated",
			"children": [
				{
					"object": "block",
					"type": "paragraph",
					"content": {
						"type": "rich_text",
						"text": {
							"content": "Como construir uma API REST com o Prisma e o PostgreSQL",
							"link": null
						},
						"annotations": {
							"italic": false,
							"bold": false,
							"code": false,
							"underline": true,
							"color": "#028cfc",
							"link": {
								"url": "https://www.digitalocean.com/community/tutorials/how-to-build-a-rest-api-with-prisma-and-postgresql-pt"
							}
						},
						"checked": false,
						"language": null
					},
					"has_children": false
				}
			]
		},
		{
			"object": "page",
			"id": "62e7423523302ff0bf0bed48",
			"cover": null,
			"icon": null,
			"property": null,
			"name": "Notion Page",
			"url": "http://localhost:3000/page/slug/notion-page",
			"children": []
		}
	]
}
```