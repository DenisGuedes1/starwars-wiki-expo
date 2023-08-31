import { ScreenScrollContainer } from "../../components";
import { Hero } from "../../components/organisms";
import { useDataStore } from "../../services/stores";
import { GoBack } from "../../components";
export const Detail =() =>{
    const {selectdData} =useDataStore()
    return (
        <ScreenScrollContainer>
            <Hero item={selectdData} onDetail/>
            <GoBack/>
        </ScreenScrollContainer>
    )
}
