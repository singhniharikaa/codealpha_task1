const fs = require('fs');
const https = require('https');
const path = require('path');

const targetDir = path.join(__dirname, 'images');

if (!fs.existsSync(targetDir)){
    fs.mkdirSync(targetDir);
}

const images = [
    { id: 'p1', url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500', category: 'people' },
    { id: 'p2', url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500', category: 'people' },
    { id: 'p3', url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500', category: 'people' },
    { id: 'p4', url: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500', category: 'people' },
    { id: 'p5', url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500', category: 'people' },
    { id: 'p6', url: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500', category: 'people' },
    { id: 'p7', url: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=500', category: 'people' },
    { id: 'p8', url: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500', category: 'people' },
    { id: 'p9', url: 'https://images.unsplash.com/photo-1506072123512-841cb83ee596?w=500', category: 'people' },
    { id: 'p10', url: 'https://images.unsplash.com/photo-1484863137850-59afcfe05386?w=500', category: 'people' },
    { id: 'f1', url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500', category: 'food' }, 
    { id: 'f2', url: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500', category: 'food' }, 
    { id: 'f3', url: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=500', category: 'food' }, 
    { id: 'f4', url: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=500', category: 'food' }, 
    { id: 'f5', url: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=500', category: 'food' }, 
    { id: 'f6', url: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500', category: 'food' }, 
    { id: 'f7', url: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500', category: 'food' }, 
    { id: 'f8', url: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500', category: 'food' },
    { id: 'f9', url: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500', category: 'food' },
    { id: 'f10', url: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500', category: 'food' },
    { id: 'n1', url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500', category: 'nature' },
    { id: 'n2', url: 'https://images.unsplash.com/photo-1441974235888-9d2a6aef6309?w=500', category: 'nature' },
    { id: 'n3', url: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=500', category: 'nature' },
    { id: 'n4', url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=500', category: 'nature' },
    { id: 'n5', url: 'https://images.unsplash.com/photo-1501854140884-074cf2b264e9?w=500', category: 'nature' },
    { id: 'n6', url: 'https://images.unsplash.com/photo-1511497584788-876760111969?w=500', category: 'nature' },
    { id: 'n7', url: 'https://images.unsplash.com/photo-1426604966848-d124ecd6f378?w=500', category: 'nature' },
    { id: 'n8', url: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=500', category: 'nature' },
    { id: 'n9', url: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=500', category: 'nature' },
    { id: 'n10', url: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=500', category: 'nature' },
    { id: 'a1', url: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500', category: 'architecture' },
    { id: 'a2', url: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?w=500', category: 'architecture' },
    { id: 'a3', url: 'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?w=500', category: 'architecture' },
    { id: 'a4', url: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=500', category: 'architecture' },
    { id: 'a5', url: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=500', category: 'architecture' },
    { id: 'a6', url: 'https://images.unsplash.com/photo-1355088205775-5c1a851d7f1d?w=500', category: 'architecture' },
    { id: 'a7', url: 'https://images.unsplash.com/photo-1518005052351-4e86fa227192?w=500', category: 'architecture' },
    { id: 'a8', url: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61?w=500', category: 'architecture' },
    { id: 'a9', url: 'https://images.unsplash.com/photo-1519455331569-8d76016e792e?w=500', category: 'architecture' },
    { id: 'a10', url: 'https://images.unsplash.com/photo-1495574581423-be1298c56e30?w=500', category: 'architecture' },
    { id: 't1', url: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=500', category: 'travel' },
    { id: 't2', url: 'https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?w=500', category: 'travel' },
    { id: 't3', url: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=500', category: 'travel' },
    { id: 't4', url: 'https://images.unsplash.com/photo-1499678329028-101435549a4e?w=500', category: 'travel' },
    { id: 't5', url: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500', category: 'travel' },
    { id: 't6', url: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500', category: 'travel' },
    { id: 't7', url: 'https://images.unsplash.com/photo-1476900543704-4312b78632f8?w=500', category: 'travel' },
    { id: 't8', url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500', category: 'travel' },
    { id: 't9', url: 'https://images.unsplash.com/photo-1471343755495-2cc0b9253457?w=500', category: 'travel' },
    { id: 't10', url: 'https://images.unsplash.com/photo-1510619888-29cb115e83ee?w=500', category: 'travel' },
    { id: 'an1', url: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?w=500', category: 'animals' }, 
    { id: 'an2', url: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=500', category: 'animals' }, 
    { id: 'an3', url: 'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=500', category: 'animals' }, 
    { id: 'an4', url: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=500', category: 'animals' }, 
    { id: 'an5', url: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=500', category: 'animals' }, 
    { id: 'an6', url: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=500', category: 'animals' }, 
    { id: 'an7', url: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=500', category: 'animals' }, 
    { id: 'an8', url: 'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?w=500', category: 'animals' }, 
    { id: 'an9', url: 'https://images.unsplash.com/photo-1525351484333-2a3a1936940a?w=500', category: 'animals' },
    { id: 'an10', url: 'https://images.unsplash.com/photo-1455587734955-0801a0252b68?w=500', category: 'animals' },
];

const downloadImage = (url, filepath) => {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            if (res.statusCode === 200 || res.statusCode === 302) { 
                if (res.statusCode === 302) {
                     downloadImage(res.headers.location, filepath).then(resolve).catch(reject);
                     return;
                }
                const stream = fs.createWriteStream(filepath);
                res.pipe(stream);
                stream.on('finish', () => {
                    stream.close();
                    resolve();
                });
            } else {
                reject(new Error(`Failed to get '${url}' (${res.statusCode})`));
            }
        }).on('error', (err) => {
            fs.unlink(filepath, () => {}); 
            reject(err.message);
        });
    });
};

(async () => {
    console.log(`Starting download of ${images.length} images...`);
    let count = 0;
    for (const img of images) {
        const filepath = path.join(targetDir, `${img.category}_${img.id}.jpg`);
        try {
            await downloadImage(img.url, filepath);
            count++;
            if (count % 5 === 0) console.log(`Downloaded ${count}/${images.length}...`);
        } catch (e) {
            console.error(`Failed to download ${img.id}: ${e}`);
        }
    }
    console.log('All downloads complete.');
})();
