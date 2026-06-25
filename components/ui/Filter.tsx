import {
    Combobox,
    ComboboxContent,
    ComboboxEmpty,
    ComboboxInput,
    ComboboxItem,
    ComboboxList,
} from "@/components/ui/combobox"
import { ButtonGroup } from "@/components/ui/button-group"
import { Corsi } from "@/data/data";


type Ordini = {
  label: string
  value: string
}

const ordini: Ordini[] = [
  { label: "Data (più recenti)", value: "new" },
  { label: "Data (più vecchi)", value: "old" },
]


export default function Filter() {
    return (
        <ButtonGroup>
            <Combobox items={Corsi}>
                <ComboboxInput placeholder="Seleziona il corso"/>
                <ComboboxContent>
                    <ComboboxEmpty>No items found.</ComboboxEmpty>
                    <ComboboxList>
                        {Corsi.map((item) => (
                            <ComboboxItem key={item.id} value={item.title}>
                                {item.title}
                            </ComboboxItem>
                        ))}
                    </ComboboxList>
                </ComboboxContent>
            </Combobox>
            <Combobox items={Corsi}>
                <ComboboxInput placeholder="Ordina per:" />
                <ComboboxContent>
                    <ComboboxEmpty>No items found.</ComboboxEmpty>
                    <ComboboxList>
                        {ordini.map((item) => (
                            <ComboboxItem key={item.value} value={item.label}>
                                {item.label}
                            </ComboboxItem>
                        ))}
                    </ComboboxList>
                </ComboboxContent>
            </Combobox>
        </ButtonGroup>
    )
}