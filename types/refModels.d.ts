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

	interface RefModelOptions {
		icon?: string
		models?: DisplayReferenceModel.Model[]
		condition?: ConditionResolvable
	}

	const displayReferenceObjects: {
		refmodels: {
			player: refModel<'player'>
			zombie: refModel<'zombie'>
			armor_stand: refModel<'armor_stand'>
			baby_zombie: refModel<'baby_zombie'>
			armor_stand_small: refModel<'armor_stand_small'>
			fox: refModel<'fox'>
			monitor: refModel<'monitor'>
			bow: refModel<'bow'>
			crossbow: refModel<'crossbow'>
			eating: refModel<'eating'>
			tooting: refModel<'tooting'>
			block: refModel<'block'>
			frame: refModel<'frame'>
			frame_invisible: refModel<'frame_invisible'>
			frame_top: refModel<'frame_top'>
			frame_top_invisible: refModel<'frame_top_invisible'>
			inventory_nine: refModel<'inventory_nine'>
			inventory_full: refModel<'inventory_full'>
			hud: refModel<'hud'>
		}
		active: refModel<keyof typeof displayReferenceObjects.refmodels> | ''
		/* Clears the active display model */
		clear(): void
		bar(buttons: any): void
		ref_indexes: Record<DisplaySlotNames, number>
		slots: DisplaySlotName[]
	}

	class refModel<ID extends string> {
		constructor(id: ID, options?: RefModelOptions)
		id: ID
		name: string
		icon: string
		model: THREE.Mesh
		models: DisplayReferenceModel.Model[]
		condition?: ConditionResolvable
		initialized: boolean
		variant?: 'steve' | 'alex'
		pose_angles: Record<DisplaySlotNames, number>
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
