/* ===== คลังคำศัพท์เสริม — วางชุดใหม่ต่อท้ายได้เรื่อยๆ ===== */
window.WORDPACK = { easy:[], medium:[], hard:[] };

/* ========== ชุดที่ 1 : ระดับง่าย A1–A2 (คำที่ 101–200) ========== */
window.WORDPACK.easy.push(
{w:"Brother",p:"/ˈbrʌð.ər/",h:"My brother is ten years old.",a:"พี่ชาย น้องชาย"},
{w:"Sister",p:"/ˈsɪs.tər/",h:"Her sister works in a hotel.",a:"พี่สาว น้องสาว"},
{w:"Baby",p:"/ˈbeɪ.bi/",h:"The baby is sleeping now.",a:"ทารก เด็กอ่อน"},
{w:"Boy",p:"/bɔɪ/",h:"That boy is my neighbor.",a:"เด็กผู้ชาย"},
{w:"Girl",p:"/ɡɜːl/",h:"The girl is singing a song.",a:"เด็กผู้หญิง"},
{w:"Man",p:"/mæn/",h:"A tall man asked for help.",a:"ผู้ชาย"},
{w:"Woman",p:"/ˈwʊm.ən/",h:"The woman in blue is my aunt.",a:"ผู้หญิง"},
{w:"Child",p:"/tʃaɪld/",h:"Every child needs love.",a:"เด็ก"},
{w:"Name",p:"/neɪm/",h:"What is your full name?",a:"ชื่อ"},
{w:"Birthday",p:"/ˈbɜːθ.deɪ/",h:"My birthday is in May.",a:"วันเกิด"},
{w:"Age",p:"/eɪdʒ/",h:"Please write your age here.",a:"อายุ"},
{w:"Job",p:"/dʒɒb/",h:"He found a new job.",a:"งาน อาชีพ"},
{w:"Office",p:"/ˈɒf.ɪs/",h:"Her office is on the third floor.",a:"สำนักงาน"},
{w:"Bank",p:"/bæŋk/",h:"The bank opens at nine.",a:"ธนาคาร"},
{w:"Restaurant",p:"/ˈres.trɒnt/",h:"We ate at a Thai restaurant.",a:"ร้านอาหาร"},
{w:"Hotel",p:"/həʊˈtel/",h:"The hotel is near the beach.",a:"โรงแรม"},
{w:"Park",p:"/pɑːk/",h:"Children play in the park.",a:"สวนสาธารณะ"},
{w:"Beach",p:"/biːtʃ/",h:"The beach was very crowded.",a:"ชายหาด"},
{w:"Mountain",p:"/ˈmaʊn.tɪn/",h:"They climbed a high mountain.",a:"ภูเขา"},
{w:"River",p:"/ˈrɪv.ər/",h:"The river flows to the sea.",a:"แม่น้ำ"},
{w:"Sea",p:"/siː/",h:"The sea is calm today.",a:"ทะเล"},
{w:"Sky",p:"/skaɪ/",h:"The sky is clear and blue.",a:"ท้องฟ้า"},
{w:"Moon",p:"/muːn/",h:"The moon is bright tonight.",a:"ดวงจันทร์"},
{w:"Star",p:"/stɑːr/",h:"I can see many stars.",a:"ดวงดาว"},
{w:"Wind",p:"/wɪnd/",h:"The wind is very strong.",a:"ลม"},
{w:"Snow",p:"/snəʊ/",h:"There is snow on the ground.",a:"หิมะ"},
{w:"Cloud",p:"/klaʊd/",h:"A dark cloud covered the sun.",a:"เมฆ"},
{w:"Fire",p:"/faɪər/",h:"They made a fire to keep warm.",a:"ไฟ"},
{w:"Garden",p:"/ˈɡɑː.dən/",h:"She grows roses in the garden.",a:"สวน"},
{w:"Kitchen",p:"/ˈkɪtʃ.ɪn/",h:"Mom is cooking in the kitchen.",a:"ห้องครัว"},
{w:"Bathroom",p:"/ˈbɑːθ.ruːm/",h:"The bathroom is on the left.",a:"ห้องน้ำ"},
{w:"Bedroom",p:"/ˈbed.ruːm/",h:"My bedroom has two windows.",a:"ห้องนอน"},
{w:"Bed",p:"/bed/",h:"The cat sleeps on my bed.",a:"เตียง"},
{w:"Floor",p:"/flɔːr/",h:"Do not put your bag on the floor.",a:"พื้น"},
{w:"Wall",p:"/wɔːl/",h:"There is a clock on the wall.",a:"กำแพง ผนัง"},
{w:"Key",p:"/kiː/",h:"I lost my car key.",a:"กุญแจ"},
{w:"Box",p:"/bɒks/",h:"Put the books in this box.",a:"กล่อง"},
{w:"Paper",p:"/ˈpeɪ.pər/",h:"I need a sheet of paper.",a:"กระดาษ"},
{w:"Pen",p:"/pen/",h:"Can I borrow your pen?",a:"ปากกา"},
{w:"Pencil",p:"/ˈpen.səl/",h:"Draw the line with a pencil.",a:"ดินสอ"},
{w:"Picture",p:"/ˈpɪk.tʃər/",h:"She painted a lovely picture.",a:"รูปภาพ"},
{w:"Map",p:"/mæp/",h:"Look at the map to find the way.",a:"แผนที่"},
{w:"Clock",p:"/klɒk/",h:"The clock says half past six.",a:"นาฬิกาแขวน"},
{w:"Bicycle",p:"/ˈbaɪ.sɪ.kəl/",h:"He rides a bicycle to work.",a:"จักรยาน"},
{w:"Bus",p:"/bʌs/",h:"The bus stops at the corner.",a:"รถประจำทาง"},
{w:"Boat",p:"/bəʊt/",h:"We crossed the river by boat.",a:"เรือ"},
{w:"Plane",p:"/pleɪn/",h:"The plane lands at noon.",a:"เครื่องบิน"},
{w:"Road",p:"/rəʊd/",h:"This road leads to the temple.",a:"ถนนหนทาง"},
{w:"Bridge",p:"/brɪdʒ/",h:"Walk across the bridge carefully.",a:"สะพาน"},
{w:"Farm",p:"/fɑːm/",h:"My uncle works on a farm.",a:"ฟาร์ม ไร่นา"},
{w:"Village",p:"/ˈvɪl.ɪdʒ/",h:"She grew up in a small village.",a:"หมู่บ้าน"},
{w:"Island",p:"/ˈaɪ.lənd/",h:"They visited a quiet island.",a:"เกาะ"},
{w:"Meat",p:"/miːt/",h:"I do not eat much meat.",a:"เนื้อสัตว์"},
{w:"Chicken",p:"/ˈtʃɪk.ɪn/",h:"We had fried chicken for lunch.",a:"ไก่"},
{w:"Soup",p:"/suːp/",h:"This soup is a bit salty.",a:"ซุป น้ำแกง"},
{w:"Sugar",p:"/ˈʃʊɡ.ər/",h:"Do you take sugar in your tea?",a:"น้ำตาล"},
{w:"Salt",p:"/sɒlt/",h:"Add a little salt to the dish.",a:"เกลือ"},
{w:"Coffee",p:"/ˈkɒf.i/",h:"I drink coffee every morning.",a:"กาแฟ"},
{w:"Tea",p:"/tiː/",h:"She made green tea for us.",a:"ชา"},
{w:"Juice",p:"/dʒuːs/",h:"Orange juice is my favorite.",a:"น้ำผลไม้"},
{w:"Cake",p:"/keɪk/",h:"We shared a chocolate cake.",a:"เค้ก"},
{w:"Ice",p:"/aɪs/",h:"Put some ice in my drink.",a:"น้ำแข็ง"},
{w:"Dinner",p:"/ˈdɪn.ər/",h:"Dinner is ready at seven.",a:"อาหารเย็น"},
{w:"Lunch",p:"/lʌntʃ/",h:"We had lunch together.",a:"อาหารกลางวัน"},
{w:"Breakfast",p:"/ˈbrek.fəst/",h:"I never skip breakfast.",a:"อาหารเช้า"},
{w:"Menu",p:"/ˈmen.juː/",h:"Can I see the menu, please?",a:"เมนูรายการอาหาร"},
{w:"Plate",p:"/pleɪt/",h:"Put the rice on a clean plate.",a:"จาน"},
{w:"Cup",p:"/kʌp/",h:"She drank a cup of tea.",a:"ถ้วย แก้ว"},
{w:"Knife",p:"/naɪf/",h:"Cut the fruit with a knife.",a:"มีด"},
{w:"Spoon",p:"/spuːn/",h:"Eat the soup with a spoon.",a:"ช้อน"},
{w:"Angry",p:"/ˈæŋ.ɡri/",h:"Dad was angry about the noise.",a:"โกรธ"},
{w:"Sad",p:"/sæd/",h:"She looked sad this morning.",a:"เศร้า"},
{w:"Afraid",p:"/əˈfreɪd/",h:"He is afraid of dogs.",a:"กลัว"},
{w:"Busy",p:"/ˈbɪz.i/",h:"I am busy all week.",a:"ยุ่ง ไม่ว่าง"},
{w:"Free",p:"/friː/",h:"Are you free tomorrow?",a:"ว่าง ฟรี"},
{w:"Clean",p:"/kliːn/",h:"The room looks very clean.",a:"สะอาด"},
{w:"Dirty",p:"/ˈdɜː.ti/",h:"His shoes are dirty.",a:"สกปรก"},
{w:"Heavy",p:"/ˈhev.i/",h:"This suitcase is too heavy.",a:"หนัก"},
{w:"Light",p:"/laɪt/",h:"The bag is light and easy to carry.",a:"เบา"},
{w:"Long",p:"/lɒŋ/",h:"She has long hair.",a:"ยาว"},
{w:"Short",p:"/ʃɔːt/",h:"It was a short meeting.",a:"สั้น เตี้ย"},
{w:"Strong",p:"/strɒŋ/",h:"He is strong enough to lift it.",a:"แข็งแรง"},
{w:"Weak",p:"/wiːk/",h:"I felt weak after the flu.",a:"อ่อนแอ"},
{w:"Rich",p:"/rɪtʃ/",h:"They live in a rich neighborhood.",a:"รวย"},
{w:"Poor",p:"/pɔːr/",h:"The family was very poor.",a:"ยากจน"},
{w:"Young",p:"/jʌŋ/",h:"She is too young to drive.",a:"อายุน้อย"},
{w:"Kind",p:"/kaɪnd/",h:"The nurse was very kind to me.",a:"ใจดี"},
{w:"Funny",p:"/ˈfʌn.i/",h:"His story was really funny.",a:"ตลก ขำขัน"},
{w:"Quiet",p:"/ˈkwaɪ.ət/",h:"Please be quiet in the library.",a:"เงียบ"},
{w:"Loud",p:"/laʊd/",h:"The music is too loud.",a:"เสียงดัง"},
{w:"Dangerous",p:"/ˈdeɪn.dʒər.əs/",h:"Swimming here is dangerous.",a:"อันตราย"},
{w:"Safe",p:"/seɪf/",h:"This area is safe at night.",a:"ปลอดภัย"},
{w:"Ready",p:"/ˈred.i/",h:"Are you ready to go?",a:"พร้อม"},
{w:"Sick",p:"/sɪk/",h:"He stayed home because he was sick.",a:"ป่วย"},
{w:"Healthy",p:"/ˈhel.θi/",h:"Eat well to stay healthy.",a:"สุขภาพดี"},
{w:"Wrong",p:"/rɒŋ/",h:"You gave the wrong answer.",a:"ผิด"},
{w:"Start",p:"/stɑːt/",h:"The class starts at eight.",a:"เริ่มต้น"},
{w:"Stop",p:"/stɒp/",h:"The rain finally stopped.",a:"หยุด"},
{w:"Wait",p:"/weɪt/",h:"Please wait a moment.",a:"รอ"},
{w:"Give",p:"/ɡɪv/",h:"Give this letter to your teacher.",a:"ให้ มอบให้"}
);

window.WORDPACK.medium.push(
{w:"Achieve",p:"/əˈtʃiːv/",h:"She achieved her goal last year.",a:"บรรลุ ทำสำเร็จ"},

{w:"Admire",p:"/ədˈmaɪər/",h:"I admire his courage.",a:"ชื่นชม นับถือ"},

{w:"Advantage",p:"/ədˈvɑːn.tɪdʒ/",h:"Speaking English is an advantage.",a:"ข้อได้เปรียบ"},

{w:"Afford",p:"/əˈfɔːd/",h:"I cannot afford a new car.",a:"มีเงินพอจ่าย"},

{w:"Ancient",p:"/ˈeɪn.ʃənt/",h:"They studied ancient history.",a:"โบราณ"},

{w:"Anxious",p:"/ˈæŋk.ʃəs/",h:"She felt anxious before the test.",a:"กังวล วิตก"},

{w:"Apologize",p:"/əˈpɒl.ə.dʒaɪz/",h:"He apologized for being late.",a:"ขอโทษ"},

{w:"Appreciate",p:"/əˈpriː.ʃi.eɪt/",h:"I appreciate your help.",a:"ซาบซึ้ง เห็นคุณค่า"},

{w:"Approach",p:"/əˈprəʊtʃ/",h:"We need a new approach.",a:"วิธีการ แนวทาง"},

{w:"Argue",p:"/ˈɑː.ɡjuː/",h:"They argue about money.",a:"เถียง โต้แย้ง"},

{w:"Attempt",p:"/əˈtempt/",h:"His first attempt failed.",a:"ความพยายาม"},

{w:"Attitude",p:"/ˈæt.ɪ.tʃuːd/",h:"She has a positive attitude.",a:"ทัศนคติ"},

{w:"Available",p:"/əˈveɪ.lə.bəl/",h:"The room is available now.",a:"ว่าง พร้อมใช้"},

{w:"Avoid",p:"/əˈvɔɪd/",h:"Try to avoid junk food.",a:"หลีกเลี่ยง"},

{w:"Benefit",p:"/ˈben.ɪ.fɪt/",h:"Exercise has many benefits.",a:"ประโยชน์"},

{w:"Brief",p:"/briːf/",h:"He gave a brief explanation.",a:"สั้น กระชับ"},

{w:"Capable",p:"/ˈkeɪ.pə.bəl/",h:"She is capable of leading.",a:"มีความสามารถ"},

{w:"Challenge",p:"/ˈtʃæl.ɪndʒ/",h:"This job is a real challenge.",a:"ความท้าทาย"},

{w:"Commit",p:"/kəˈmɪt/",h:"He committed to the project.",a:"ผูกมัด ทุ่มเท"},

{w:"Compare",p:"/kəmˈpeər/",h:"Compare the two options.",a:"เปรียบเทียบ"},

{w:"Complain",p:"/kəmˈpleɪn/",h:"Customers complained about the noise.",a:"บ่น ร้องเรียน"},

{w:"Concern",p:"/kənˈsɜːn/",h:"Safety is our main concern.",a:"ความกังวล ความห่วงใย"},

{w:"Confident",p:"/ˈkɒn.fɪ.dənt/",h:"She looks confident on stage.",a:"มั่นใจ"},

{w:"Confuse",p:"/kənˈfjuːz/",h:"The map confused me.",a:"ทำให้สับสน"},

{w:"Consider",p:"/kənˈsɪd.ər/",h:"Please consider my offer.",a:"พิจารณา"},

{w:"Convince",p:"/kənˈvɪns/",h:"He convinced me to join.",a:"โน้มน้าวให้เชื่อ"},

{w:"Cooperate",p:"/kəʊˈɒp.ər.eɪt/",h:"The teams cooperated well.",a:"ร่วมมือ"},

{w:"Decrease",p:"/dɪˈkriːs/",h:"Sales decreased last month.",a:"ลดลง"},

{w:"Definitely",p:"/ˈdef.ɪ.nət.li/",h:"I will definitely come.",a:"อย่างแน่นอน"},

{w:"Deliver",p:"/dɪˈlɪv.ər/",h:"They deliver food quickly.",a:"ส่งมอบ"},

{w:"Demand",p:"/dɪˈmɑːnd/",h:"Demand for housing is high.",a:"ความต้องการ อุปสงค์"},

{w:"Depend",p:"/dɪˈpend/",h:"It depends on the weather.",a:"ขึ้นอยู่กับ"},

{w:"Describe",p:"/dɪˈskraɪb/",h:"Can you describe the man?",a:"บรรยาย อธิบายลักษณะ"},

{w:"Determine",p:"/dɪˈtɜː.mɪn/",h:"The results determine the winner.",a:"กำหนด ตัดสิน"},

{w:"Develop",p:"/dɪˈvel.əp/",h:"They develop mobile apps.",a:"พัฒนา"},

{w:"Discover",p:"/dɪˈskʌv.ər/",h:"Scientists discovered a new planet.",a:"ค้นพบ"},

{w:"Effort",p:"/ˈef.ət/",h:"It took a lot of effort.",a:"ความพยายาม ความอุตสาหะ"},

{w:"Encourage",p:"/ɪnˈkʌr.ɪdʒ/",h:"Teachers encourage their students.",a:"ให้กำลังใจ ส่งเสริม"},

{w:"Environment",p:"/ɪnˈvaɪ.rən.mənt/",h:"We must protect the environment.",a:"สิ่งแวดล้อม"},

{w:"Essential",p:"/ɪˈsen.ʃəl/",h:"Sleep is essential for health.",a:"จำเป็นอย่างยิ่ง"},

{w:"Establish",p:"/ɪˈstæb.lɪʃ/",h:"They established the company in 1990.",a:"ก่อตั้ง"},

{w:"Evidence",p:"/ˈev.ɪ.dəns/",h:"There is no evidence for that.",a:"หลักฐาน"},

{w:"Expand",p:"/ɪkˈspænd/",h:"The business expanded quickly.",a:"ขยายตัว"},

{w:"Expect",p:"/ɪkˈspekt/",h:"I expect good results.",a:"คาดหวัง"},

{w:"Experience",p:"/ɪkˈspɪə.ri.əns/",h:"She has five years of experience.",a:"ประสบการณ์"},

{w:"Familiar",p:"/fəˈmɪl.i.ər/",h:"That name sounds familiar.",a:"คุ้นเคย"},

{w:"Focus",p:"/ˈfəʊ.kəs/",h:"Focus on your studies.",a:"มุ่งเน้น จดจ่อ"},

{w:"Frequent",p:"/ˈfriː.kwənt/",h:"He is a frequent visitor.",a:"บ่อยครั้ง"},

{w:"Generous",p:"/ˈdʒen.ər.əs/",h:"He is generous with his time.",a:"ใจกว้าง เอื้อเฟื้อ"},

{w:"Guarantee",p:"/ˌɡær.ənˈtiː/",h:"We guarantee the quality.",a:"รับประกัน"},

{w:"Hesitate",p:"/ˈhez.ɪ.teɪt/",h:"Do not hesitate to ask.",a:"ลังเล"},

{w:"Ignore",p:"/ɪɡˈnɔːr/",h:"He ignored my message.",a:"เพิกเฉย ไม่สนใจ"},

{w:"Impress",p:"/ɪmˈpres/",h:"Her speech impressed everyone.",a:"ทำให้ประทับใจ"},

{w:"Improve",p:"/ɪmˈpruːv/",h:"I want to improve my English.",a:"ปรับปรุง ทำให้ดีขึ้น"},

{w:"Include",p:"/ɪnˈkluːd/",h:"The price includes breakfast.",a:"รวมถึง"},

{w:"Increase",p:"/ɪnˈkriːs/",h:"Prices increased this year.",a:"เพิ่มขึ้น"},

{w:"Influence",p:"/ˈɪn.flu.əns/",h:"Parents influence their children.",a:"อิทธิพล ส่งผลต่อ"},

{w:"Injury",p:"/ˈɪn.dʒər.i/",h:"He recovered from the injury.",a:"การบาดเจ็บ"},

{w:"Involve",p:"/ɪnˈvɒlv/",h:"The job involves a lot of travel.",a:"เกี่ยวข้อง พัวพัน"},

{w:"Maintain",p:"/meɪnˈteɪn/",h:"Maintain a healthy diet.",a:"รักษา คงไว้"},

{w:"Manage",p:"/ˈmæn.ɪdʒ/",h:"She manages a small team.",a:"จัดการ บริหาร"},

{w:"Mention",p:"/ˈmen.ʃən/",h:"He mentioned your name.",a:"เอ่ยถึง กล่าวถึง"},

{w:"Necessary",p:"/ˈnes.ə.ser.i/",h:"Is this step necessary?",a:"จำเป็น"},

{w:"Obvious",p:"/ˈɒb.vi.əs/",h:"The answer is obvious.",a:"ชัดเจน เห็นได้ชัด"},

{w:"Opportunity",p:"/ˌɒp.əˈtʃuː.nə.ti/",h:"This is a great opportunity.",a:"โอกาส"},

{w:"Organize",p:"/ˈɔː.ɡən.aɪz/",h:"She organized the whole event.",a:"จัดระเบียบ จัดงาน"},

{w:"Particular",p:"/pəˈtɪk.jə.lər/",h:"He is particular about food.",a:"เฉพาะเจาะจง พิถีพิถัน"},

{w:"Perform",p:"/pəˈfɔːm/",h:"The band performed last night.",a:"แสดง ปฏิบัติ"},

{w:"Persuade",p:"/pəˈsweɪd/",h:"She persuaded him to stay.",a:"ชักชวน เกลี้ยกล่อม"},

{w:"Practical",p:"/ˈpræk.tɪ.kəl/",h:"That is a practical solution.",a:"ใช้ได้จริง เป็นรูปธรรม"},

{w:"Prefer",p:"/prɪˈfɜːr/",h:"I prefer tea to coffee.",a:"ชอบมากกว่า"},

{w:"Prevent",p:"/prɪˈvent/",h:"Vaccines prevent disease.",a:"ป้องกัน ยับยั้ง"},

{w:"Previous",p:"/ˈpriː.vi.əs/",h:"In my previous job I traveled a lot.",a:"ก่อนหน้า"},

{w:"Progress",p:"/ˈprəʊ.ɡres/",h:"She made good progress.",a:"ความก้าวหน้า"},

{w:"Provide",p:"/prəˈvaɪd/",h:"The hotel provides towels.",a:"จัดหาให้"},

{w:"Purpose",p:"/ˈpɜː.pəs/",h:"What is the purpose of this?",a:"จุดประสงค์"},

{w:"Realize",p:"/ˈrɪə.laɪz/",h:"I realized my mistake.",a:"ตระหนัก รู้ตัว"},

{w:"Recognize",p:"/ˈrek.əɡ.naɪz/",h:"I did not recognize you.",a:"จำได้ รับรู้"},

{w:"Recommend",p:"/ˌrek.əˈmend/",h:"I recommend this restaurant.",a:"แนะนำ"},

{w:"Reduce",p:"/rɪˈdjuːs/",h:"We must reduce waste.",a:"ลด ทำให้น้อยลง"},

{w:"Regret",p:"/rɪˈɡret/",h:"I regret saying that.",a:"เสียใจภายหลัง"},

{w:"Relevant",p:"/ˈrel.ə.vənt/",h:"Please keep it relevant.",a:"เกี่ยวข้อง ตรงประเด็น"},

{w:"Rely",p:"/rɪˈlaɪ/",h:"You can rely on him.",a:"พึ่งพา ไว้วางใจ"},

{w:"Remain",p:"/rɪˈmeɪn/",h:"Please remain seated.",a:"ยังคง คงอยู่"},

{w:"Replace",p:"/rɪˈpleɪs/",h:"We replaced the old printer.",a:"แทนที่"},

{w:"Require",p:"/rɪˈkwaɪər/",h:"This job requires patience.",a:"ต้องการ กำหนดให้มี"},

{w:"Responsible",p:"/rɪˈspɒn.sə.bəl/",h:"He is responsible for sales.",a:"รับผิดชอบ"},

{w:"Reveal",p:"/rɪˈviːl/",h:"The study revealed the truth.",a:"เปิดเผย"},

{w:"Satisfy",p:"/ˈsæt.ɪs.faɪ/",h:"The meal satisfied everyone.",a:"ทำให้พอใจ"},

{w:"Sensitive",p:"/ˈsen.sɪ.tɪv/",h:"This is a sensitive topic.",a:"อ่อนไหว ละเอียดอ่อน"},

{w:"Significant",p:"/sɪɡˈnɪf.ɪ.kənt/",h:"There was a significant change.",a:"สำคัญ มีนัยสำคัญ"},

{w:"Situation",p:"/ˌsɪtʃ.uˈeɪ.ʃən/",h:"The situation is under control.",a:"สถานการณ์"},

{w:"Solve",p:"/sɒlv/",h:"Let us solve this problem.",a:"แก้ปัญหา"},

{w:"Struggle",p:"/ˈstrʌɡ.əl/",h:"He struggled with the task.",a:"ดิ้นรน ต่อสู้อย่างยากลำบาก"},

{w:"Succeed",p:"/səkˈsiːd/",h:"She succeeded in business.",a:"ประสบความสำเร็จ"},

{w:"Suggest",p:"/səˈdʒest/",h:"I suggest we leave now.",a:"เสนอแนะ"},

{w:"Suitable",p:"/ˈsuː.tə.bəl/",h:"This film is suitable for children.",a:"เหมาะสม"},

{w:"Support",p:"/səˈpɔːt/",h:"My family supports me.",a:"สนับสนุน"},

{w:"Survive",p:"/səˈvaɪv/",h:"They survived the storm.",a:"รอดชีวิต"},

{w:"Wealthy",p:"/ˈwel.θi/",h:"He became wealthy at a young age.",a:"ร่ำรวย"}

);

window.WORDPACK.hard.push(
    {w:"Achieve",p:"/əˈtʃiːv/",h:"She achieved her goal last year.",a:"บรรลุ ทำสำเร็จ"},

{w:"Admire",p:"/ədˈmaɪər/",h:"I admire his courage.",a:"ชื่นชม นับถือ"},

{w:"Advantage",p:"/ədˈvɑːn.tɪdʒ/",h:"Speaking English is an advantage.",a:"ข้อได้เปรียบ"},

{w:"Afford",p:"/əˈfɔːd/",h:"I cannot afford a new car.",a:"มีเงินพอจ่าย"},

{w:"Ancient",p:"/ˈeɪn.ʃənt/",h:"They studied ancient history.",a:"โบราณ"},

{w:"Anxious",p:"/ˈæŋk.ʃəs/",h:"She felt anxious before the test.",a:"กังวล วิตก"},

{w:"Apologize",p:"/əˈpɒl.ə.dʒaɪz/",h:"He apologized for being late.",a:"ขอโทษ"},

{w:"Appreciate",p:"/əˈpriː.ʃi.eɪt/",h:"I appreciate your help.",a:"ซาบซึ้ง เห็นคุณค่า"},

{w:"Approach",p:"/əˈprəʊtʃ/",h:"We need a new approach.",a:"วิธีการ แนวทาง"},

{w:"Argue",p:"/ˈɑː.ɡjuː/",h:"They argue about money.",a:"เถียง โต้แย้ง"},

{w:"Attempt",p:"/əˈtempt/",h:"His first attempt failed.",a:"ความพยายาม"},

{w:"Attitude",p:"/ˈæt.ɪ.tʃuːd/",h:"She has a positive attitude.",a:"ทัศนคติ"},

{w:"Available",p:"/əˈveɪ.lə.bəl/",h:"The room is available now.",a:"ว่าง พร้อมใช้"},

{w:"Avoid",p:"/əˈvɔɪd/",h:"Try to avoid junk food.",a:"หลีกเลี่ยง"},

{w:"Benefit",p:"/ˈben.ɪ.fɪt/",h:"Exercise has many benefits.",a:"ประโยชน์"},

{w:"Brief",p:"/briːf/",h:"He gave a brief explanation.",a:"สั้น กระชับ"},

{w:"Capable",p:"/ˈkeɪ.pə.bəl/",h:"She is capable of leading.",a:"มีความสามารถ"},

{w:"Challenge",p:"/ˈtʃæl.ɪndʒ/",h:"This job is a real challenge.",a:"ความท้าทาย"},

{w:"Commit",p:"/kəˈmɪt/",h:"He committed to the project.",a:"ผูกมัด ทุ่มเท"},

{w:"Compare",p:"/kəmˈpeər/",h:"Compare the two options.",a:"เปรียบเทียบ"},

{w:"Complain",p:"/kəmˈpleɪn/",h:"Customers complained about the noise.",a:"บ่น ร้องเรียน"},

{w:"Concern",p:"/kənˈsɜːn/",h:"Safety is our main concern.",a:"ความกังวล ความห่วงใย"},

{w:"Confident",p:"/ˈkɒn.fɪ.dənt/",h:"She looks confident on stage.",a:"มั่นใจ"},

{w:"Confuse",p:"/kənˈfjuːz/",h:"The map confused me.",a:"ทำให้สับสน"},

{w:"Consider",p:"/kənˈsɪd.ər/",h:"Please consider my offer.",a:"พิจารณา"},

{w:"Convince",p:"/kənˈvɪns/",h:"He convinced me to join.",a:"โน้มน้าวให้เชื่อ"},

{w:"Cooperate",p:"/kəʊˈɒp.ər.eɪt/",h:"The teams cooperated well.",a:"ร่วมมือ"},

{w:"Decrease",p:"/dɪˈkriːs/",h:"Sales decreased last month.",a:"ลดลง"},

{w:"Definitely",p:"/ˈdef.ɪ.nət.li/",h:"I will definitely come.",a:"อย่างแน่นอน"},

{w:"Deliver",p:"/dɪˈlɪv.ər/",h:"They deliver food quickly.",a:"ส่งมอบ"},

{w:"Demand",p:"/dɪˈmɑːnd/",h:"Demand for housing is high.",a:"ความต้องการ อุปสงค์"},

{w:"Depend",p:"/dɪˈpend/",h:"It depends on the weather.",a:"ขึ้นอยู่กับ"},

{w:"Describe",p:"/dɪˈskraɪb/",h:"Can you describe the man?",a:"บรรยาย อธิบายลักษณะ"},

{w:"Determine",p:"/dɪˈtɜː.mɪn/",h:"The results determine the winner.",a:"กำหนด ตัดสิน"},

{w:"Develop",p:"/dɪˈvel.əp/",h:"They develop mobile apps.",a:"พัฒนา"},

{w:"Discover",p:"/dɪˈskʌv.ər/",h:"Scientists discovered a new planet.",a:"ค้นพบ"},

{w:"Effort",p:"/ˈef.ət/",h:"It took a lot of effort.",a:"ความพยายาม ความอุตสาหะ"},

{w:"Encourage",p:"/ɪnˈkʌr.ɪdʒ/",h:"Teachers encourage their students.",a:"ให้กำลังใจ ส่งเสริม"},

{w:"Environment",p:"/ɪnˈvaɪ.rən.mənt/",h:"We must protect the environment.",a:"สิ่งแวดล้อม"},

{w:"Essential",p:"/ɪˈsen.ʃəl/",h:"Sleep is essential for health.",a:"จำเป็นอย่างยิ่ง"},

{w:"Establish",p:"/ɪˈstæb.lɪʃ/",h:"They established the company in 1990.",a:"ก่อตั้ง"},

{w:"Evidence",p:"/ˈev.ɪ.dəns/",h:"There is no evidence for that.",a:"หลักฐาน"},

{w:"Expand",p:"/ɪkˈspænd/",h:"The business expanded quickly.",a:"ขยายตัว"},

{w:"Expect",p:"/ɪkˈspekt/",h:"I expect good results.",a:"คาดหวัง"},

{w:"Experience",p:"/ɪkˈspɪə.ri.əns/",h:"She has five years of experience.",a:"ประสบการณ์"},

{w:"Familiar",p:"/fəˈmɪl.i.ər/",h:"That name sounds familiar.",a:"คุ้นเคย"},

{w:"Focus",p:"/ˈfəʊ.kəs/",h:"Focus on your studies.",a:"มุ่งเน้น จดจ่อ"},

{w:"Frequent",p:"/ˈfriː.kwənt/",h:"He is a frequent visitor.",a:"บ่อยครั้ง"},

{w:"Generous",p:"/ˈdʒen.ər.əs/",h:"He is generous with his time.",a:"ใจกว้าง เอื้อเฟื้อ"},

{w:"Guarantee",p:"/ˌɡær.ənˈtiː/",h:"We guarantee the quality.",a:"รับประกัน"},

{w:"Hesitate",p:"/ˈhez.ɪ.teɪt/",h:"Do not hesitate to ask.",a:"ลังเล"},

{w:"Ignore",p:"/ɪɡˈnɔːr/",h:"He ignored my message.",a:"เพิกเฉย ไม่สนใจ"},

{w:"Impress",p:"/ɪmˈpres/",h:"Her speech impressed everyone.",a:"ทำให้ประทับใจ"},

{w:"Improve",p:"/ɪmˈpruːv/",h:"I want to improve my English.",a:"ปรับปรุง ทำให้ดีขึ้น"},

{w:"Include",p:"/ɪnˈkluːd/",h:"The price includes breakfast.",a:"รวมถึง"},

{w:"Increase",p:"/ɪnˈkriːs/",h:"Prices increased this year.",a:"เพิ่มขึ้น"},

{w:"Influence",p:"/ˈɪn.flu.əns/",h:"Parents influence their children.",a:"อิทธิพล ส่งผลต่อ"},

{w:"Injury",p:"/ˈɪn.dʒər.i/",h:"He recovered from the injury.",a:"การบาดเจ็บ"},

{w:"Involve",p:"/ɪnˈvɒlv/",h:"The job involves a lot of travel.",a:"เกี่ยวข้อง พัวพัน"},

{w:"Maintain",p:"/meɪnˈteɪn/",h:"Maintain a healthy diet.",a:"รักษา คงไว้"},

{w:"Manage",p:"/ˈmæn.ɪdʒ/",h:"She manages a small team.",a:"จัดการ บริหาร"},

{w:"Mention",p:"/ˈmen.ʃən/",h:"He mentioned your name.",a:"เอ่ยถึง กล่าวถึง"},

{w:"Necessary",p:"/ˈnes.ə.ser.i/",h:"Is this step necessary?",a:"จำเป็น"},

{w:"Obvious",p:"/ˈɒb.vi.əs/",h:"The answer is obvious.",a:"ชัดเจน เห็นได้ชัด"},

{w:"Opportunity",p:"/ˌɒp.əˈtʃuː.nə.ti/",h:"This is a great opportunity.",a:"โอกาส"},

{w:"Organize",p:"/ˈɔː.ɡən.aɪz/",h:"She organized the whole event.",a:"จัดระเบียบ จัดงาน"},

{w:"Particular",p:"/pəˈtɪk.jə.lər/",h:"He is particular about food.",a:"เฉพาะเจาะจง พิถีพิถัน"},

{w:"Perform",p:"/pəˈfɔːm/",h:"The band performed last night.",a:"แสดง ปฏิบัติ"},

{w:"Persuade",p:"/pəˈsweɪd/",h:"She persuaded him to stay.",a:"ชักชวน เกลี้ยกล่อม"},

{w:"Practical",p:"/ˈpræk.tɪ.kəl/",h:"That is a practical solution.",a:"ใช้ได้จริง เป็นรูปธรรม"},

{w:"Prefer",p:"/prɪˈfɜːr/",h:"I prefer tea to coffee.",a:"ชอบมากกว่า"},

{w:"Prevent",p:"/prɪˈvent/",h:"Vaccines prevent disease.",a:"ป้องกัน ยับยั้ง"},

{w:"Previous",p:"/ˈpriː.vi.əs/",h:"In my previous job I traveled a lot.",a:"ก่อนหน้า"},

{w:"Progress",p:"/ˈprəʊ.ɡres/",h:"She made good progress.",a:"ความก้าวหน้า"},

{w:"Provide",p:"/prəˈvaɪd/",h:"The hotel provides towels.",a:"จัดหาให้"},

{w:"Purpose",p:"/ˈpɜː.pəs/",h:"What is the purpose of this?",a:"จุดประสงค์"},

{w:"Realize",p:"/ˈrɪə.laɪz/",h:"I realized my mistake.",a:"ตระหนัก รู้ตัว"},

{w:"Recognize",p:"/ˈrek.əɡ.naɪz/",h:"I did not recognize you.",a:"จำได้ รับรู้"},

{w:"Recommend",p:"/ˌrek.əˈmend/",h:"I recommend this restaurant.",a:"แนะนำ"},

{w:"Reduce",p:"/rɪˈdjuːs/",h:"We must reduce waste.",a:"ลด ทำให้น้อยลง"},

{w:"Regret",p:"/rɪˈɡret/",h:"I regret saying that.",a:"เสียใจภายหลัง"},

{w:"Relevant",p:"/ˈrel.ə.vənt/",h:"Please keep it relevant.",a:"เกี่ยวข้อง ตรงประเด็น"},

{w:"Rely",p:"/rɪˈlaɪ/",h:"You can rely on him.",a:"พึ่งพา ไว้วางใจ"},

{w:"Remain",p:"/rɪˈmeɪn/",h:"Please remain seated.",a:"ยังคง คงอยู่"},

{w:"Replace",p:"/rɪˈpleɪs/",h:"We replaced the old printer.",a:"แทนที่"},

{w:"Require",p:"/rɪˈkwaɪər/",h:"This job requires patience.",a:"ต้องการ กำหนดให้มี"},

{w:"Responsible",p:"/rɪˈspɒn.sə.bəl/",h:"He is responsible for sales.",a:"รับผิดชอบ"},

{w:"Reveal",p:"/rɪˈviːl/",h:"The study revealed the truth.",a:"เปิดเผย"},

{w:"Satisfy",p:"/ˈsæt.ɪs.faɪ/",h:"The meal satisfied everyone.",a:"ทำให้พอใจ"},

{w:"Sensitive",p:"/ˈsen.sɪ.tɪv/",h:"This is a sensitive topic.",a:"อ่อนไหว ละเอียดอ่อน"},

{w:"Significant",p:"/sɪɡˈnɪf.ɪ.kənt/",h:"There was a significant change.",a:"สำคัญ มีนัยสำคัญ"},

{w:"Situation",p:"/ˌsɪtʃ.uˈeɪ.ʃən/",h:"The situation is under control.",a:"สถานการณ์"},

{w:"Solve",p:"/sɒlv/",h:"Let us solve this problem.",a:"แก้ปัญหา"},

{w:"Struggle",p:"/ˈstrʌɡ.əl/",h:"He struggled with the task.",a:"ดิ้นรน ต่อสู้อย่างยากลำบาก"},

{w:"Succeed",p:"/səkˈsiːd/",h:"She succeeded in business.",a:"ประสบความสำเร็จ"},

{w:"Suggest",p:"/səˈdʒest/",h:"I suggest we leave now.",a:"เสนอแนะ"},

{w:"Suitable",p:"/ˈsuː.tə.bəl/",h:"This film is suitable for children.",a:"เหมาะสม"},

{w:"Support",p:"/səˈpɔːt/",h:"My family supports me.",a:"สนับสนุน"},

{w:"Survive",p:"/səˈvaɪv/",h:"They survived the storm.",a:"รอดชีวิต"},

{w:"Wealthy",p:"/ˈwel.θi/",h:"He became wealthy at a young age.",a:"ร่ำรวย"}

);