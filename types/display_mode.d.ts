/// <reference path="./blockbench.d.ts"/>

declare global {
	const DisplayMode: {
		slots: DisplaySlotName[]
	}

	type DisplaySlotName =
		| 'firstperson_lefthand'
		| 'firstperson_righthand'
		| 'fixed'
		| 'ground'
		| 'gui'
		| 'head'
		| 'thirdperson_lefthand'
		| 'thirdperson_righthand'

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
}

export {}
