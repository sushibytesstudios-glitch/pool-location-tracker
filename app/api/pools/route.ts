export async function GET() {
const baseId = process.env.AIRTABLE_BASE_ID
const tableName = process.env.AIRTABLE_TABLE_NAME
const apiKey = process.env.AIRTABLE_API_KEY

const url = `https://api.airtable.com/v0/${baseId}/${tableName}`

const response = await fetch(url, {
headers: {
Authorization: `Bearer ${apiKey}`,
},
})
