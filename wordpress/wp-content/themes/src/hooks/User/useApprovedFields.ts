import { Ref, ref, watch } from 'vue';
import { RegisterFields } from '@/types/User';
import Validator from '@/classes/Validator';
import RegisterRules from '@/Validation/RegisterRules';
import { ApprovedFields } from '@/types/User';
import ApprovedRules from '@/Validation/ApprovedRules';


export const userApprovedFields = () => {

    const isValidAll = ref(false);

    const DataFields: Ref<ApprovedFields> = ref({ code: '' })

    const isntValidFields: Ref<ApprovedFields> = ref({ code: null })

    const ValidFields: Ref<ApprovedFields> = ref({ code: null })


    const validData = async () => {

        let validator = new Validator<ApprovedFields>({
            code: DataFields.value.code,
        });

        validator.setRules(ApprovedRules);

        let validFields = await validator.run();

        ValidFields.value = validFields;

        isntValidFields.value = validator.getIsntValidFields();

        if (validator.isAllFieldsValid()) {
            isValidAll.value = true
        } else {
            isValidAll.value = false
        }
    }

    watch(DataFields, () => {
        validData()
    }, { deep: true })

    return {
        DataFields,
        isntValidFields,
        ValidFields,
        validData,
        isValidAll
    }
}