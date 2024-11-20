import b1 from "../assets/b1.png"
import cincin from "../assets/cincin.png"

function main2(){
    return(
        <>
            <div className="main-2">
                <img src={b1} alt="" />

                <div className="konten2">
                    <img src={cincin} alt="cincin" />
                    <p className="ayat">وَمِنْ كُلِّ شَيْءٍ خَلَقْنَا زَوْجَيْنِ لَعَلَّكُمْ تَذَكَّرُوْنَ</p>
                    <p className="arti">"Dan segala sesuatu Kami ciptakan berpasang-pasangan agar kamu mengingat (kebesaran Allah).</p>
                    <p className="surah">~(QS. Az Zariyat: 49)~</p>
                </div>
            </div>
            
        </>
    )
}

export default main2