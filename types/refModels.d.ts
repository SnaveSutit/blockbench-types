declare global {
	type DisplaySlotNames =
		| 'thirdperson_righthand'
		| 'thirdperson_lefthand'
		| 'firstperson_righthand'
		| 'firstperson_lefthand'
		| 'head'
		| 'gui'
		| 'ground'
		| 'fixed'

	let display_slot: DisplaySlotNames
	let display_area: THREE.Object3D

	interface RefModelOptions {
		icon: string
		condition?: ConditionResolvable
	}

	const displayReferenceObjects: {
		refmodels: {
			player: refModel
			zombie: refModel
			armor_stand: refModel
			baby_zombie: refModel
			armor_stand_small: refModel
			fox: refModel
			monitor: refModel
			bow: refModel
			crossbow: refModel
			eating: refModel
			tooting: refModel
			block: refModel
			frame: refModel
			frame_invisible: refModel
			frame_top: refModel
			frame_top_invisible: refModel
			inventory_nine: refModel
			inventory_full: refModel
			hud: refModel
		}
		active?: refModel
		bar(buttons: any): void
		clear(): void
		ref_indexes: {
			thirdperson_righthand: number
			thirdperson_lefthand: number
			firstperson_righthand: number
			firstperson_lefthand: number
			ground: number
			gui: number
			head: number
			fixed: number
		}
		slots: DisplaySlotNames[]
	}

	class refModel {
		pose_angles: Record<DisplaySlotNames, number>
		variant?: string
		name: string
		model: THREE.Object3D
		constructor(id: string, options?: RefModelOptions)
		buildModel(things: any, texture: string, texture_res?: ArrayVector2): this
		setModelVariant(variant: string): void
		load(index: any): void
		buildPlayer(slim?: boolean): void
		buildArmorStand(): void
		buildArmorStandSmall(): void
		buildFox(): void
		buildZombie(): void
		buildBabyZombie(): void
		buildMonitor(): void
		buildBlock(): void
		buildFrame(): void
		buildFrameInvisible(): void
		buildFrameTop(): void
		buildFrameTopInvisible(): void
		updateBasePosition(): void
	}
}

export {}
