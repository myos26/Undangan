import dicky from "../assets/dicky.png"
import rara from "../assets/rara.png"
import gambar3 from "../assets/3.png"

function main3(){
    return(
        <>
            <div className="main-3">
                <div className="cowok">
                    <div className="ft-co">
                        <img src={dicky} alt="" />
                    </div>
                    <div className="nama-co">
                        <h2>Dicky Julia Candra</h2>
                        <p>Putra dari <br />
                        Bpk. Wagiman & Ibu Sunartik</p>
                        <p>Banyuwangi, Wongsorjo, Dsn. pancoran 07/02</p>
                    </div>
                </div>
                <div className="sekat">
                    <h1>&</h1>
                </div>
                <div className="cewek">
                    <div className="nama-ce">
                        <h2>Rara Ayu Siti Mutiah</h2>
                        <p>Putri dari <br />
                        Bpk. Sugino & Almh. Ibu Legiyem</p>
                        <p>Dsn. Blokagung 02/05 Desa Karangdoro Kec. Tegalsari</p>
                    </div>
                    <div className="ft-ce">
                        <img src={rara} alt="" />
                    </div>
                </div>
                <div className="ft-prewed">
                    <img src={gambar3} alt="" />
                </div>
            </div>
        </>
    )
}

export default main3