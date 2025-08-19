/// <reference path="./blockbench.d.ts"/>

declare global {
	type DisplaySlotName =
		| 'firstperson_lefthand'
		| 'firstperson_righthand'
		| 'fixed'
		| 'ground'
		| 'gui'
		| 'head'
		| 'thirdperson_lefthand'
		| 'thirdperson_righthand'

	const DisplayMode: {
		slots: DisplaySlotName[]
		//Sets the Work Area to the given Space
		setBase(
			x: number,
			y: number,
			z: number,
			rx: number,
			ry: number,
			rz: number,
			sx: number,
			sy: number,
			sz: number
		): void
	}

	let display_slot: DisplaySlotName

	interface DisplaySlotOptions {
		rotation?: ArrayVector3
		translation?: ArrayVector3
		scale?: ArrayVector3
		rotation_pivot?: ArrayVector3
		scale_pivot?: ArrayVector3
		mirror?: [boolean, boolean, boolean]
	}

	/**
	 * Display Slots hold the transform values for a specific item slot in the Minecraft Java Edition "Display Mode" feature
	 */
	class DisplaySlot {
		constructor(id: DisplaySlotName, data: DisplaySlotOptions)
		rotation: ArrayVector3
		translation: ArrayVector3
		scale: ArrayVector3
		rotation_pivot: ArrayVector3
		scale_pivot: ArrayVector3
		mirror: [boolean, boolean, boolean]
		/**
		 * Reset slot to default values
		 */
		default(): this
		extend(data: DisplaySlotOptions): this
		copy(): {
			rotation: ArrayVector3
			translation: ArrayVector3
			scale: ArrayVector3
			rotation_pivot: ArrayVector3
			scale_pivot: ArrayVector3
			mirror: [boolean, boolean, boolean]
		}
		/**
		 * Generate the values of the slot for export
		 */
		export():
			| {
					rotation: ArrayVector3
					translation: ArrayVector3
					scale: ArrayVector3
					rotation_pivot?: ArrayVector3
					scale_pivot?: ArrayVector3
			  }
			| undefined
		/**
		 * Visually update the UI with the data from this slot if selected
		 */
		update(): this
	}

	interface refModelOptions {
		icon?: string
		models?: DisplayReferenceModel.Model[]
		condition?: ConditionResolvable
	}

	class refModel<ID extends string> {
		constructor(id: ID, options: refModelOptions)
		name: string
		icon: string
		model: THREE.Object3D
		models: DisplayReferenceModel.Model[]
		condition?: ConditionResolvable
		initialized: boolean
		pose_angles: any
		variant?: 'steve' | 'alex'

		updateBasePosition(): void
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
		ref_indexes: Record<string, number>
		slots: DisplaySlotName[]
	}
}

export {}
