import { Component, Vue } from "vue-property-decorator"
import JsComponent from "@/component/jsComponent/JsComponent.vue"
import VueExtend from "@/component/vueExtend/VueExtend.vue"
import PropertyDecorator from "@/component/propertyDecorator/PropertyDecorator.vue"
import { PropObjType } from "@/types"

@Component({
  components: {
    JsComponent,
    VueExtend,
    PropertyDecorator
  }
})
export default class Home extends Vue {
  public title: string = "Hello Vue!!!"
  public propValue: string = "Prop Value"
  public propObj: PropObjType = {
    id: "hoge",
    index: 100
  }

  public created(): void {
    console.log(this)
  }
}
