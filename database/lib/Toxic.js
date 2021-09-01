const Toxic = () => new Promise((resolve, reject) => {
  let kata = [
    'Situ Ganteng?',
    'Udah cupu sok suhu pula anjing',
    'Memang mirip Anjing',
    'Kontol cilik yo keras',
    'Jembut ngradul',
    'Memek mak lo item ya awokawok',
    'Muka lu kek kontol',
    'Mak lu punya tempek gak?',
    'Muka lu kek Tempek',
    'Gay anjing',
    'Gue tau pasti lu sering coli awokawok',
    'Bagi Bokep Anjing',
    'Situ coli pakek apa?',
    'Mak Lu kalo ngentot desah gak bro?',
    'Celeng-celeng',
    'Lu setan',
    'Alah bacot bocah babi',
    'Ayok Ngewe',
    'Pasti kontol kamu item',
    'Bangsat kau',
    'Alah ngentot'  //By Sugiono
  ]
  let randKata = kata[Math.floor(Math.random() * kata.length)]
  let list = [  //Tambahin Sendiri _-
    `muka lo kek ${randKata}`, `anda tau ${randKata} ?`,`${randKata} Lo ${randKata}`,
    `ngapa ${randKata} ga seneng?`,`ribut sini lo ${randKata}`,`jangan ngakak lo ${randKata}`,
    `wey ${randKata}!!`,`aku sih owh aja ya ${randKata}`,`ga seneng send lokasi lo ${randKata}`,
    `capek w ${randKata}`, `hari ini kau minat gelut ${kata[2]} ?`, `w tw lo itu ${randKata}`,
    `w ganteng dan lo kek ${randKata}`,`bucin lo ${randKata}`,
    `najis baperan kek ${randKata}`,
    `nge-teh ${randKata}`,`gaya lo sok iye, mukalo kek ${randKata}`,`${randKata} awokwowkok`
  ]
  resolve(list[Math.floor(Math.random() * list.length)])
})

//PLEASE JANGAN GANTI NAMA PEMBUAT BANGSAT
//CREATED BY Alvio Adji Januar

module.exports = { Toxic }